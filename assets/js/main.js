
/*---------------------------------------------
Template name: .
Version: 1.0.0

[Table of Content]
----------------------
01: Preloader
02: Mixit UP
03: Lity
04: Swiper Slider
05: Back to Top
----------------------------------------------*/

(function($) {
    "use strict";



	/* ======= STICKY MENU ======= */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky-menu');
		} else {
			$("header").removeClass('sticky-menu');
		}
	});

	/* ====== SHOW & HIDE MENU ====== */
	$(".menu-show-hide-btn").click(function () {
		$("nav .main-menu").toggleClass("open-menu");
	});









    ////////////////////////////////////////////////////

    // 0. WOW JS

    new WOW().init();


    ////////////////////////////////////////////////////

    // 03.  Data-Background Js

    $("[data-background]").each(function () {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + " ) ")
    });




    






})(jQuery);














