$(document).ready(function(){
    

    const visual_swiper = new Swiper('.visual .swiper', {

	effect: "fade",

	autoplay: {
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,

	pagination: {
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',
		renderBullet: function (index, className) {
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},

});

const collection_swiper = new Swiper('.collection .swiper', {

	effect: "fade",

	autoplay: {
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,

	pagination: {
        el: ".collection .paging",
        type: "progressbar",
    },
    on: {
        slideChange : function(){
            $('.collection .count').html('<strong>'+ (this.realIndex + 1) +'</strong><span> / 5</span>');
        },
    },

    navigation: {  /* 이전, 다음 버튼 */
    nextEl: '.collection-next',  /* 다음 버튼의 클래스명 */
    prevEl: '.collection-prev',  
},

});
const news_swiper = new Swiper('.news .swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	breakpoints: {
		769: {
			slidesPerView: 'auto',
			spaceBetween: 30,
		},
		1025: {
			slidesPerView: 'auto',
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 'auto',
			spaceBetween: 30,
		},
	},
	centeredSlides: false,
	loop: true,
});

})