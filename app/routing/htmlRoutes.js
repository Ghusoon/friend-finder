var express = require('express');
var path = require('path');
var app = express();
var friends = require('../data/friends.js');

//-------------------------------
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey",function(req, res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});
app.get('/api/friends', function (req, res) {
    res.json(friends);
});

// ---------------------------------

var PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("App listening on port "+ PORT);
});
