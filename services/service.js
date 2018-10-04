console.log("service file connect");
var service = function (app) {
    this.app = app;

};

 

  module.exports = service;



 
  service.prototype.submit=function(reqobj,callback){
  	 var userrequest=reqobj;
     
  	    console.log("reqobj from client",userrequest);
   
        console.log("userrequest.username",userrequest.username);
        console.log("userrequest.password",userrequest.password);

  	   var MongoClient = require('mongodb').MongoClient;

  	   var url = "mongodb://localhost/127.0.0.1:27017";
  	    console.log("connect the database");
  	    MongoClient.connect(url,{useNewUrlParser : true},function(err,db){

  	    	if(err) throw err;
  	    	console.log("access the database");
  	    	var dbo = db.db("local");
 	    	  console.log("find the table and values");
  	    	dbo.collection('student').find({username:userrequest.username,password:userrequest.password}).toArray(function(err,student){
          console.log("return the values");
          if (err) throw err;
          console.log(student);
          db.close();
          callback(err,student)
          })

  	       });
        };
    
    //insert
    service.prototype.insert=function(reqobj,callback){
     var userrequest=reqobj;
     
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

          MongoClient.connect(url,{useNewUrlParser : true}, function(err, db) {
          if (err) throw err;
          var dbo = db.db("local");
          var myobj = { username:userrequest.username, password:userrequest.password };
          dbo.collection("student").insert(myobj, function(err, res) {
          if (err) throw err;
          console.log(" document inserted");
          db.close();
        });
      });
     };     