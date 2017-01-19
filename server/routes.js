var CandidateHandler    = require('./candidateHandler');

candidateHandler = new CandidateHandler.CandidateHandler();

var connectRoutes = function(expressApp) {

  expressApp.get('/data/candidates', function (req, res) {
    candidateHandler.allCandidate(req, res);
  });

  expressApp.post('/data/candidate', function (req, res) {
    candidateHandler.createCandidate(req, res);
  });

  expressApp.get('/data/candidate/:id', function (req, res) {
    candidateHandler.findCandidate(req, res);
  });

  expressApp.put('/data/candidate/:id', function (req, res) {
    candidateHandler.updateCandidate(req, res);
  });

}

exports.connectRoutes = connectRoutes
