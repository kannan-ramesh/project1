$( document ).ready(function(){
	console.log("get REQUEST ");
// 	// GET REQUEST


	$("#allCustomers").click(function(event){
		event.preventDefault();
		ajaxGet();
		console.log("get of the value");
	});
	
	var css = $("<link>", {
  "rel" : "stylesheet",
  "type" :  "text/css",
  "href" : "style.css"
})[0];

css.onload = function(){
  console.log("CSS IN IFRAME LOADED");
};

	// DO GET
	function ajaxGet(){

		$.ajax({
			type : "GET",
			url : window.location + "api/customers/all",
			success: function(result){
				$('#getResultDiv ul').empty();
				var custList = "";
				$.each(result, function(i, customer){
					$('#getResultDiv .list-group').append(customer.firstname + " " + customer.lastname + "<br>")
				});
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})