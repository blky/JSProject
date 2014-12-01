
var textbox = $('.tweetbox textarea');
var tweetLimit = 140;
var currentCharacters ;

var calculateCurrentCharacters = function(event){
 	// event.preventDefault();
	currentCharacters = textbox.val().length;
	var remaining = tweetLimit - currentCharacters;
 	var textCounter = $('.tweet-counter');

	// if (remaining <= 15 ) {
	// 	textCounter.addClass('warning');
	// } else {
	// 	textCounter.removeClass('warning');
	// }  ;
	$('.tweet-counter').text(remaining);


	textCounter.toggleClass('warning',remaining <= 15);
	textCounter.toggleClass('error', remaining <= 0);

	// refer to special element in jquery
	$('.tweetbox [type=submit]').attr('disabled',remaining < 0); 

}

calculateCurrentCharacters();
var log = $('a').attr('href');
console.log(log);
var t =  $('.tweet');
console.log(t.length);

textbox.on('keyup',calculateCurrentCharacters);


$('.tweetbox').on('submit',function(event){
	event.preventDefault();
	var value = textbox.val();
 // var value = $('.tweet').val()
	// var newtweet = $('.tweet').last().clone();

 	if (value.length <= tweetLimit) {
 		var newtweet = $('.tweet').first().clone(); 

 		//when clone, don't clone the favorited or retweeted button style
 		newtweet.removeClass('favorited retweeted');

		newtweet.find('.tweet-content').text(value);
		newtweet.find('.time').text('now');

		// newtweet.appendTo('.tweets'); 
		newtweet.prependTo('.tweets');
		// textbox.val('');
		// $('.tweet-counter').text(140);
		// var t= $(".tweet") .eq(0);
		textbox.val('');



		calculateCurrentCharacters();

 	};
 	
 });

//is doing this, it will not be able to work on newly created tweet 
// $('.tweets button').on('click',function() {  
 //so always do this for click event, first the bigger section to include the button, then 
 // on event, then the target , tehn call back function
 $('.tweets').on('click','button',function() {
 	var classText; 
 	if ($(this).hasClass('favorite')) {
  		classText = 'favorited';
 	} else {
 		classText = 'retweeted';
 	}
 	$(this).closest('.tweet').toggleClass(classText);


}) ; 

 