var express = require("express");
var app = express();

// var MongClient = require('mongodb').MongClient;
//   	   var url = "mongodb://localhost:27017/";


 
var path = __dirname + '/views/';
 
 

 
app.get('/',function(req,res){
   res.sendFile(path + 'index.html');
   })





 
app.listen(8585, function () {
  console.log('Example app listening on port ');
})

console.log("require of the routes");
var webroutes=require("F:/project1/routes/routes.js");

var webroutes=new webroutes(app);

webroutes.init();


