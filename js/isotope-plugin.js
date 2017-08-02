$(document).ready(function() {
	
	$("portfolio_items").isotope({
		itemSelector: '.single-item',
		layoutMode: 'fitrows',
	});

	$('.portfolio_filter li').click(function(){
		$(".portfolio_filter li").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr('data-filter');
		$(".portfolio_items").isotope({
		filter: selector,
		animationoptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}

		});
		
	});


});