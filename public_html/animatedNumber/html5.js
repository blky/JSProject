$(document).ready(function() {
	$("#faqs li").click(function() {
		$(this).animate(
			{ fontSize: "200%", opacity: 1  }, 2000 );  
		$(this).animate(
			{ fontSize: "175%" }, 1000 );
	});
})