$(document).ready(function() {

	// $(".popup").magnificPopup({type:"image"});
	// $(".popup_c").magnificPopup();

	// $.stellar({
	// 	responsive: true,
	// 	horizontalOffset: 50
	// });

	// $(".owl-carousel").owlCarousel({
	// 	//loop : true,
	// 	responsive : {
	// 		0 : {
	// 			items : 1,
	// 			nav : true
	// 		}
	// 	},
	// 	navText : ""
	// });

	function hResize() {
		$(".header").css("min-height", $(".header-wrapper").height());
	};
	hResize();
	$(window).resize(function() {
		hResize()
	});

	$(".gallery a").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$(".about_slider.owl-carousel").owlCarousel({
		loop : true,
		smartSpeed : 700,
		responsiveClass : true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	// $(".top_phone .wrapper .tab").click(function() {
	// 	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	// 	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	// }).eq(0).addClass("active");

	// $(".bottom_phone .wrapper .tab").click(function() {
	// 	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	// 	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	// }).eq(0).addClass("active");

	// $(".tabs_header .wrapper .tab").click(function() {
	// 	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	// 	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	// }).eq(0).addClass("active");

	// $(".s_contacts .tab").click(function() {
	// 	$(".s_contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
	// 	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	// }).eq(0).addClass("active");

	// //Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	// //Аякс отправка форм
	// //Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function(e) {
	// 	var clnfrm = $(this);
	// 	e.preventDefault;
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			var magnificPopup = $.magnificPopup.instance;
	// 			magnificPopup.close(); 
	// 			clnfrm.trigger("reset");
	// 		}, 0);
	// 	});
	// 	return false;
	// });

	// $("#hidden_form").submit(function(e) {
	// 	var clnfrm = $(this);
	// 	e.preventDefault;
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			var magnificPopup = $.magnificPopup.instance;
	// 			magnificPopup.close(); 
	// 			clnfrm.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
	
});

// $(window).load(function() {

// 	$(".top_header h1").animated("fadeInDown", "fadeOut");
// 	$(".top_header h2").animated("fadeInUp", "fadeOut");
// 	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
// 	$(".prof_item").animated("fadeInRight", "fadeOut");
// 	$(".s_prof form").animated("zoomInRight", "fadeOut");
// 	$(".s_back h3").animated("fadeInUp", "fadeOut");
// 	$("footer .row").animated("fadeInUp", "fadeInUp");

// });