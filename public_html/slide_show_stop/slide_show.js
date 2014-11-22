$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
	
	// the function for running the slide show	
	var runSlideShow = function() {   
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
        	function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt"); 
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
				$("#caption").text(nextCaption).fadeIn(1000);
			}
		)
	}
	
	// start slide show
    var timer1 = setInterval(runSlideShow, 1000);
    
 
	// here's one way to code this app without using the toggle event method
	$("#startstop").click(function() {
		if (timer1 != null) {
	    	clearInterval(timer1);
	    	timer1 = null;
	    	  $("p").html(" start the slide show");
		}
		else {
			timer1 = setInterval(runSlideShow, 1000);
			 $("p").html(" stop the slide show");
		}
	});
	
})