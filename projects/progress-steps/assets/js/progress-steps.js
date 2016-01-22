/**
  * This script isn't absolutely necessary for the steps to work
  * You could use a condition and apply the .active class to the li element based on page or step
  */

$(document).ready(function() {

	$('.progress-steps li').on('click',function() {
		$('.progress-steps li').removeClass('active');
		$(this).addClass('active');
	});

	$('[data-progress-step]').on('click',function() {
		var step = $(this).data('progress-step');
		console.log(step);

		$('.progress-steps li').removeClass('active');
		$('#' + step + '').addClass('active');
	});

});