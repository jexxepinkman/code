$(document).ready(function(){
    const cts_exhibit_wrapper_swiper = new Swiper('.cts_exhibit .wrapper .wrapper2 .swiper', { 
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		769: {    /* 768px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1025: {   /* 1024px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

});

const cts_exhibit_bot_swiper = new Swiper('.cts_exhibit .bot .swiper', { 
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		769: {    /* 768px 이상일때 적용 */
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1025: {   /* 1024px 이상일때 적용 */
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},
	centeredSlides: false,
	loop: true, 
});
})