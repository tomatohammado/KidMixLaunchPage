(function($) {

$("#nav ul li a[href^='#']").on('click', function(e) {

	// prevent default anchor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	function navigate() {
		// animate
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 300, function(){
			window.location.hash = hash;
		});
	}

	if($('.navbar-toggler').is(':visible')) {

		$('#navbar-collapse').one('hidden.bs.collapse', function () {
			navigate();			 		
		});

		// collapse mobile nav first
	 	var x = $('#navbar-collapse').collapse('hide');		

	}
	else {
		navigate();
	}


});

}(jQuery));
