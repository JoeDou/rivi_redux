var mongoose = require('mongoose');
var blue = require('bluebird');

var candidateSchema = mongoose.Schema({
  first_name:   {type: String},
  last_name:    {type: String},
  company:      {type: String},
  job_title:    {type: String}
});

var Candidate = mongoose.model('Candidate', candidateSchema);

Candidate.promFind = blue.promisify(Candidate.find);
Candidate.promFindById = blue.promisify(Candidate.findById);
Candidate.promFindByIdAndUpdate = blue.promisify(Candidate.findByIdAndUpdate);
Candidate.promFindByIdAndRemove = blue.promisify(Candidate.findByIdAndRemove);

exports.Candidate = Candidate;
