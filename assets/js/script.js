(function ($) {
	"use strict";
	
	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */
	
	// window.load = function () {
	// 	document.getElementById('preloader').style.display = 'none';
	// }
	
	/*$(window).on("load", function () {
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});*/
	
	
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	/* $('.play-icon i').click(function () {
		var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	}); */
	
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	if($('.filtr-container').length) {
		setTimeout(function () {
			var filterizd = $('.filtr-container').filterizr({
				layout: 'sameSize', spinner: {enabled: true}
			});
			//Active changer
			$('.filtr-control').on('click', function () {
				$('.filtr-control').removeClass("active");
				$(this).addClass("active");
			});
		}, 500);
	}
	
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */
	
	//Init the slider
	/* $('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}); */
	
	
	/* ========================================================================= */
	/*	Clients Slider Carousel
	/* =========================================================================  */
	
	//Init the slider
	/* $('.clients-logo-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
	}); */
	
	
	
	
	/* ========================================================================= */
	/*	Company Slider Carousel
	/* =========================================================================  */
	/* $('.company-gallery').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
	}); */
	
	
	/* ========================================================================= */
	/*	Awars Counter Js
	/* =========================================================================  */
	
	
	
	
	
	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */
	
})(jQuery);
