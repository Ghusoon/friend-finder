

// var server ={
//     express: require('express'),
//     bodyParser :require('body-parser'),
//     path : require('path'),
//     app : express(),
//     PORT : process.env.PORT || 3000,

// }
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;




//----------------------------------------------------

app.listen(PORT,function(){
    console.log("App listening on port "+ PORT);
});

// module.exports= Server;
