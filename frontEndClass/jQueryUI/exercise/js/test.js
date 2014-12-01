
$('.clickme').on('click',function(event){
	event.preventDefault();
	alert('you clicked me!')

});

 var timer1;

// $('.starttimer').on("click",setInterval(function(){
// 	alert ('hii');
// },5000));

$('.starttimer').on("click",function(){
		alert('start');
	   timer1 = setInterval(function(){
	 	alert ('timer started...');
	 },5000);

});

 $('.stoptimer').on("click",function(){
	 alert('stop');
	 clearInterval(timer1)(function(){
	 	
	 } );

});