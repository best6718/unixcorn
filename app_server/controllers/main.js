/* GET home page */
var mongoose = require('mongoose');

exports.index = function(req, res){
    res.render('index', { title: 'ejs' });
    
};

exports.planner = function(req, res){
    //console.log(req.method, req.url);
    res.render('planner', { title: 'Day Planner' });
};

exports.about = function(req, res){
    //console.log(req.method, req.url);
    res.render('about', { title: 'Day Planner' });
};

exports.contact = function(req, res){
    res.render('contact', { title: 'Day Planner' });
};

exports.events = function(req, res){
    //console.log(req.method, req.url);
    res.render('events', { title: 'Day Planner' });
};

exports.login = function(req, res){
    //console.log(req.method, req.url);
    res.render('login', { title: 'Day Planner' });
};

exports.signup = function(req, res){
    //console.log(req.method, req.url);
    res.render('signup', { title: 'Day Planner' });
};
