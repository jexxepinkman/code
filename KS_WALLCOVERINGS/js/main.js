$(document).ready(function(){

    $('header .inner .gnb ul.depth1 >li').on('mouseenter focusin', function(){
        $('.header .inner .gnb ul.depth1 >li').removeClass('on')
        $('header .inner .gnb ul.depth1 >li').addClass('on')
        $('header').addClass('menu_over')
    })
    $('header').on('mouseleave', function(){
        $('header .inner .gnb ul.depth1 >li').removeClass('on')
        $('header .inner .gnb ul.depth1 >li').removeClass('on')
        $('header').removeClass('menu_over')
    })
    $('header').on('mouseleave', function(){
        $('header .inner .gnb ul.depth1 >li').removeClass('on')
        $('header').removeClass('menu_over')
    })

    const visual_swiper = new Swiper('.visual .swiper', {

	autoplay: {
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},

});

})