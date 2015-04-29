$(document).ready(function() {


	$('#tweet-controls').hide();

	$('#tweet-content > textarea').on('click', function() {
		$(this).animate({height: '5em'});
		$('#tweet-controls').show();

	});

	//charactersRemaining & button disable
	$('.tweet-compose').on('keyup', function() {
		var content = $('.tweet-compose').val();

		$('#char-count').text(140-$(this).val().length);
		if (140-$(this).val().length <=10) {
			$('#char-count').css('color', 'red');
		}
		else {
			$('#char-count').removeAttr('style')
		};
		if (content.length > 140) {
			$('#tweet-submit').attr('disabled', true);
		}
		else {
			$('#tweet-submit').removeAttr('disabled')
		};
	});

	// //addingTweetsToStream
	// $('#tweet-submit').on('click', function() {
	// 	var myProfilePic = $('#profile-summary avatar').attr('src');
	// 	var myUserName = $('#profile-summary').text();
	// 	var myTweet = $('.tweet-compose').text();


	// });

	// $('.tweet-actions').on('hover', function() {

	// });

	$('#tweet-submit').on('click', function() {
		var editNewTweet = function(element) {
			var fullName = $('#profile-summary').find('.fullname').text();
			var userName = $('#profile-summary').find('.username').text();
			var avatar = $('#profile-summary').find('.img').attr('src');
			var tweetText = $('#tweet-content > .tweet-compose').val();
			$(element).find('.fullname').text(fullName);
			$(element).find('.username').text(userName);
			$(element).find('.tweet-text').text(tweetText);
			$(element).find('.avatar').attr('src', avatar);

		};
		var newTweet = $('.tweet').first().clone(true);
		$('stream').prepend(newTweet);
		editNewTweet(newTweet);

		$('#tweet-content > .tweet-compose').val("");
		$("#tweet-content > tweet-compose").trigger('blur');

	});

	$('.tweet').over(function () {
		if($(this).find('.tweet-actions').hasClass('noShow')){
			$(this).find('.tweet-actions').removeClass('noShow')
		}
	{function () {
		if(!$(this).find('.stats').slideToggle(900);
			$(this).find('.reply').slideToggle(1000);)
	}};
	

});