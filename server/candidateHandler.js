var mongoose  = require('mongoose');
var blue      = require('bluebird');
var Candidate = require('./mongo/candidate').Candidate;
var _         = require('lodash');

function CandidateHandler(){
    //testing
}

CandidateHandler.prototype.allCandidate = (req, res) => {
  console.log('in all candidate')
  Candidate
  .promFind({})
  .then( models => {
    res.send(models)
  })
}

CandidateHandler.prototype.createCandidate = (req, res) => {
  let { first_name, last_name, company, job_title } = req.body
  var candidateModel = new Candidate({
    first_name,
    last_name,
    company,
    job_title
  })

  candidateModel
  .save()
  .then(() => {
    res.sendStatus(200);
  })
  .catch(function(err){
    res.json({
      success: false,
      message: err
    });
  })
};

CandidateHandler.prototype.findCandidate = (req, res) => {
  Candidate
  .promFindById(req.params.id)
  .then(model => {
    res.send(model)
  })
};

CandidateHandler.prototype.updateCandidate = (req, res) => {
  Candidate
  .promFindByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.sendStatus(201);
  })
  .catch(function(err){
    res.json({
      success: false,
      message: err
    });
  })
};

exports.CandidateHandler = CandidateHandler;
