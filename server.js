require('./server/mongo/MongoDriver');
var express = require('express')
var bodyParser  = require('body-parser');
var routes  = require('./server/routes');

var app = new (express)()
app.set('port', process.env.PORT || 3001)

app.use(express.static(__dirname + '/client'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.connectRoutes(app)

// Front End
app.get('*', function(request, response) {
  response.sendFile(__dirname + '/client/index.html')
})


app.listen(app.get('port'), function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", app.get('port'), app.get('port'))
  }
})
