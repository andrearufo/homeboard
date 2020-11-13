(function($){

	var script = {};

	/* Define Functions */

	script.test = function(){

		console.log('Test');

		var w = $(window).width();
		var h = $(window).height();

		console.log(w);

		$('pre').html( w+' x '+h );

	};

	/* Start Functions */

	$(document).ready(function() {

		script.test();

	});

})(jQuery);
