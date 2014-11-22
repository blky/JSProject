$(document).ready(function() {
	$("#first").focus();
	
	$("#mm_webinput").validate({
		rules: {
			first: {
				required: true,
				//first: true
			},
			last: {
				required: true,
				//last: true
			},
			email: {
				required: true,
				email: true,
 			},
			email_2: {
				required: true,
				email: true,
 				equalTo: "#email",
				
			},
			ID_number: {
				required: true,
				number: true,
				rangelength: [6, 6]
 			},
			
			phone: {
				required: true,
				phoneUS: true
 			},
			instructor: {
				required: true,
			},
			software: {
				required: true,
				//software: true
			},
			
		},
		messages: {
		 
			email_2: {
				equalTo: "Must equal first email entry"
			},
			phone: {
				phoneUS: "Phone must be in this format: 999-999-9999."
			},
			ID_number:{
				number:"Student ID must have 6 numbers.",
				rangelength:"Student ID must have 6 numbers."
			}
		}
	}); // end validate
}); // end ready
