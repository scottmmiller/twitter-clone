$(document).ready(function() {


	$('#tweet-controls').hide();

	$('#tweet-content > textarea').on('click', function() {
		$(this).animate({height: '5em'});
		$('#tweet-controls').show();

	});

	$('.tweet-compose').on('keyup', function() {
		$('#char-count').text(30-$(this).val().length);
		if (30-$(this).val().length <=10) {
			$('#char-count').css('color', 'red');
		}
		else {
			$('#char-count').css('color', 'black')
		};

	});


});