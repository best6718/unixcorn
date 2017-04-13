var mongoose = require('mongoose');

//Activity Results
var activityResults = mongoose.model('activityResults');
var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports.findResults = function(req, res){
    
    activityResults.findOne({name:req.params.name}).exec(function(err,data){
        sendJSONresponse(res,200, data);
    });
};

module.exports.resultsAddName = function(req, res) {
  console.log("POST results names");

  console.log('req params body' , req.params, req.body);

  activityResults
    .create({
      name : req.body.name,
      specialty : req.body.specialty,
      institution : req.body.institution, 
      courses : req.body.courses
     
    }, function(err, activityResults) {
      if (err) {
        console.log("can't create results");
        res
          .status(400)
          .json(err);
      } else {
        console.log("Job done", activityResults);
        res
          .status(201)
          .json(activityResults);
      }
    });
};


module.exports.findIdResults = function(req, res){
      activityResults
    .findById(req.params.activityId)
    .exec(function(err, data) {
      sendJSONresponse(res, 200, data);
    });
};

module.exports.getAllResults = function(req, res) {
  activityResults
    .find()    //exec tells to execute query 
    .exec(function(err, data) { 
sendJSONresponse(res, 200, data);
    });
};

//Activity Results 2
var activityResults2 = mongoose.model('activityResults2');
var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports.findResults2 = function(req, res){
    activityResults2.findOne({name:req.params.name}).exec(function(err,data){
        sendJSONresponse(res,200, data);
    });
};

module.exports.findIdResults2 = function(req, res){
      activityResults2.findById(req.params.activityId2)
    .exec(function(err, data) {
      sendJSONresponse(res, 200, data);
    });
};

module.exports.getAllResults2 = function(req, res) {
  activityResults2.find()    //exec tells to execute query 
    .exec(function(err, data) { 
sendJSONresponse(res, 200, data);
    });
};


//User Inputs
var userInputs = mongoose.model('userInputs');
var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports.findUserInputs = function(req, res){
    userInputs.findOne({name:req.params.userInputsId}).exec(function(err,data){
        sendJSONresponse(res,200, data);
    });
};

module.exports.findIdUserInputs = function(req, res){
      userInputs.findById(req.params.userInputsId)
    .exec(function(err, data) {
      sendJSONresponse(res, 200, data);
    });
};

module.exports.getAllUserInputs = function(req, res) {
  userInputs.find()    //exec tells to execute query 
    .exec(function(err, data) { 
sendJSONresponse(res, 200, data);
    });
};