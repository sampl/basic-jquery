// wait for jquery to start before you use "$"
$(document).ready(function() {

	// notice how this appears *after* "hello from main.js"
	console.log('jquery ready');

	// variable to keep track of whether our button is on or not
	buttonEnabled = false;

	// run this function when the button is clicked
	$('.my-button').click(function() {

		if (!buttonEnabled) {
			console.log('turn button on');
			buttonEnabled = true;
			$('.my-button').addClass('on').html('on');
		} else {
			console.log('turn button off');
			buttonEnabled = false;
			$('.my-button').removeClass('on').html('off');
		}

	});

});

console.log('hello from main.js');