$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper_pc', { /* 팝업을 감싼는 요소의 class명 */

    effect: "fade", 
	autoplay: {
		delay: 3300,
		disableOnInteraction: true,
	},

	loop: true,
});
})