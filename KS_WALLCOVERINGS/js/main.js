$(document).ready(function(){
    const exhibit_swiper = new Swiper('.exhibit .swiper', {

	effect: "fade",

	autoplay: {  /* 팝업 자동 실행 */
		delay: 3300,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

});

    const sns_swiper = new Swiper('.sns .swiper', {
	slidesPerView: "auto",
	spaceBetween: 30,
	breakpoints: {
		320: {
			spaceBetween: 60, 
		},
		1025: {
			spaceBetween: 100,
		},
	},
	centeredSlides: false,
	loop: true,
});
})