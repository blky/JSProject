$(document).ready(function() {
	var imgURLs = new Array();
	$("#image_swap img").each(function() {
		// get all urls 
		var urlShow = $(this).attr("src");
		imgURLs.push(urlShow) ;
	}); // end 123 images
	$("#image_swap img").each(function() {
		// get all urls 
		var urlHidden = $(this).attr("id") + ".JPG";
		imgURLs.push(urlHidden);
	}); // end 456 images
 	  i = 1; 
	$("#image_swap img").click( function (evt) {
 		$("#W4").attr("src", imgURLs[i % 6]); 
 		$("#W5").attr("src", imgURLs[(i + 1 )%6] );
		$("#W6").attr("src", imgURLs[(i + 2 )%6] );
		i++; 
 		evt.preventDefault();
	}); //end click a
 
}); // end ready