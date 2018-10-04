console.log("require the service file from action");

var Service=require("F:/project1/services/service.js");
console.log("creating a instance variable for service from action");



var action = function (app) {
    this.app = app;
    this.apiServiceInstance = new Service(app);
};

module.exports=action;

action.prototype.submit=function(request,callback){
	var reqobj=request;
	console.log('request object',reqobj);
	var self=this;

	module.exports=action;



	self.apiServiceInstance.submit(reqobj,function(error,response){
		console.log("response",response[0]);
		if(reqobj.username==response[0].username && reqobj.password==response[0].password)
		{
			console.log('login sucssfully');
		}
		else
		{
			console.log("login failed");
		}
		callback(error,response);
	});
};
 action.prototype.insert=function(request,callback){
	var reqobj=request;
	console.log('request object',reqobj);
	var self=this;
	self.apiServiceInstance.submit(reqobj,function(error,response){
		callback(error,response);
	});
	};
