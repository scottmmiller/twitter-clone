$(document).ready(function() {


	$('#tweet-controls').hide();

	$('#tweet-content > textarea').on('click', function() {
		$(this).animate({height: '5em'});
		$('#tweet-controls').show();

	});

	//charactersRemaining & button disable
	$('.tweet-compose').on('keyup', function() {
		var content = $('.tweet-compose').val();

		$('#char-count').text(30-$(this).val().length);
		if (30-$(this).val().length <=10) {
			$('#char-count').css('color', 'red');
		}
		else {
			$('#char-count').css('color', 'black')
		};
		if (content.length > 30) {
			$('#tweet-submit').attr('disabled', true);
		}
		else {
			$('#tweet-submit').removeAttr('disabled')
		};
	});




});