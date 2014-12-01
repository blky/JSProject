
 // $("#asset").val($.trim($("#asset").val()));
 var dialogForm = $('.dialog form');

dialogForm.validate({

	rules: {
		password: {
			minlength:8
		},
		
		password_confirmation: {
			//this is by id selector
			equalTo: '#password' 
		},
	},



});



$('.sign-up-now').on('click',function(event) {

	event.preventDefault();
	$('.dialog').dialog({

		modal: true ,
		width: 300,
		buttons:{
			"submit" :function (){
				// console.log('you did it');
				//using javascript and DOM for submit, instead of using jQuery
				dialogForm.submit() ;



			}
		}
	});


});
