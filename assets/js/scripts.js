$(document).ready(function() {

	// smooth scroll
	$('[data-smoothscroll-to]').on('click',function(e) {
		var navbar_height = $('#navbar').height() + 40;
		var target = $(this).data('smoothscroll-to');
		var $target = $('#' + target);
		var offset = $target.offset().top - navbar_height;

		$('html, body').stop().animate({
	        'scrollTop': offset
	    }, 400, 'swing', function () {
	    });
	});

	// bootstrap tooltips
	$('[data-toggle=tooltip]').tooltip();

	// sticky top menu
	$('.top').hide();

	$(document).scroll(function() {

		var sticky = false;

		if ($(document).scrollTop() > 100) {

			/* show sticky menu */
			$('#navbar').hide();
			$('#navbar-sticky').fadeIn('fast');
		}


		if ($(document).scrollTop() < 20) {
			$('.top').fadeOut();

			/* sticky menu */
			$('#navbar-sticky').fadeOut('fast');
			$('#navbar').fadeIn('fast');
		}

	});

});