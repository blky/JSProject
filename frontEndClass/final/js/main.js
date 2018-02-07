//history and art
$(function() {
	$( "#tabs" ).tabs();
});

 $(function() {
	$( "#accordion" ).accordion();
});

// attraction 
$('.norte').on('click',function(event){
 	event.preventDefault();
 	$('.dialog.norte').dialog ();

});

$('.tower').on('click',function(event){
 	event.preventDefault();
 	$('.dialog.tower').dialog ();

});

$('.triomphe').on('click',function(event){
 	event.preventDefault();
 	$('.dialog.triomphe').dialog ();

});


