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

});