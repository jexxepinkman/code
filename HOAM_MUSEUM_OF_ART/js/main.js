$(document).ready(function(){
    $('header .gnb >ul.depth1 >li').on('mouseenter focusin', function(){
        $('header .gnb >ul.depth1 >li').addClass('on')
        $('header .tnb').addClass('on')
    })
    $('header').on('mouseleave', function(){
        $('header .gnb >ul.depth1 >li').removeClass('on')
        $('header .tnb').removeClass('on')
    })

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
	spaceBetween: 100,
	breakpoints: {
		640: {  /* 640px 이상이 되면 적용 */
			spaceBetween: 30, 
		},
		1024: {  /* 1024px 이상이 되면 적용 */
			spaceBetween: 100,
		},
	},
	centeredSlides: false,
	loop: true,
});

	$('footer .familysite button').on('click', function(){
		$('footer .familysite').addClass('on')
	})
	$('footer .familysite.on button').on('click', function(){
		$('footer .familysite').removeClass('on')
	})
})