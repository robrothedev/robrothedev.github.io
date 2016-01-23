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

	// sticky navbar if not mobile
	function checkWidth() {
		var window_size = $(window).width();

		console.log('checking width: ' + window_size);

		if (window_size > 779) {
			$(document).scroll(function() {

				if ($(document).scrollTop() > 100) {
					/* show sticky navbar */
					$('#navbar').fadeOut('fast');
					$('#navbar-sticky').fadeIn('fast');
				}
		 
				if ($(document).scrollTop() < 80) {
					/* hide sticky navbar */
					$('#navbar-sticky').fadeOut('fast');
					$('#navbar').fadeIn('fast');
				}

			});
		}
	}

	// watch the window width on resize
	$(window).resize(checkWidth);

});