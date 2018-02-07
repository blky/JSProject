$(document).ready(function() {
	$("#slides li").click(function() {
		$(this).animate(
			{ fontSize: "150%", opacity: 1  }, 200 );  
		$(this).animate(
			{ fontSize: "100%"  }, 100);
	}); 
}); // end ready
