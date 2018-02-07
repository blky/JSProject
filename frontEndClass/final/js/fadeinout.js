

var nextSlide = $('.pics img:first-child') ;
 var nextSlideSource;
 var slide =$('.slide');
var count = 0;

var runSlideshow = function (){
  
 	if (count == 8) {
 		 clearInterval(timer1);
	} 
 	if (nextSlide.next().length == 0) {
 		
 		 slide = $('.slide2');
 		 nextSlide = $('.pics2 img:first-child') ;

 	} else {
	 	slide.fadeOut(1500,function(){
	 		nextSlide = nextSlide.next(); 
			nextSlideSource = nextSlide.attr('src');
	 		slide.attr('src',nextSlideSource).fadeIn(1000);
	 		
 		}) ; 
	}
	count =  count +1 ;
 	
}
var timer1 = setInterval(runSlideshow,2000);

 
 


// var  timer1 = setInterval(function(){
 
	//  	 $("#picture").fadeToggle();
	// 	  $("#picture").fadeToggle("slow");
	// 	  $("#picture").fadeToggle(3000);
		  
 // },5000);

// $('.fadeclick').on('click',function(e){
// 	var pic = $('picture');
// 	pic.fadeOut(1000, function(){
// 		pic.fadeIn(1000);
// 	});

// });

// $('#pic2,#pic3').hide();
// var $img = $('#pic1');
// var timer1 = setInterval(function(){
// 	$img.fadeOut(2000).next().fadeIn(2000);
// 	 $img = $img.next();
// } ,5000);

// $('.fadeclick').on('click',function(){
//  	if (timer1 != null) {
//  	    	clearInterval(timer1);
// 	    	timer1 = null;
// 		}
// });
// $('.slide').on('click',function(){
// 	var $this = $(this);
// 	$this.fadeOut(2000,function (){
// 		$this.next().fadeIn(2000);
// 	});
// });

// $('#two, #three').hide();
// $('.slide').click(function(){
//     var $this = $(this);
//     $this.fadeOut(function(){ $this.next().fadeIn(); });
// });