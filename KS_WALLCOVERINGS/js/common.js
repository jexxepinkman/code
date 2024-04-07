$(document).ready(function(){
    let scrolling

    function scroll_chk(){ //함수 선언
        scrolling = $(window).scrollTop() //스크롤 된 값을 저장
        console.log(scrolling)
        if(scrolling > 0 ){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //함수 실행
    $(window).scroll(function(){ //스크롤 할 때마다 실행
        scroll_chk()
    })

    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 768){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk()
    $(window).resize(function(){
        device_chk()
    })
    $('header .inner .gnb ul.depth1 >li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
        $('.header .inner .gnb ul.depth1 >li').removeClass('on')
        $(this).addClass('on')
        $('header').addClass('menu_over')
        }
    })
    $('header .inner .gnb ul.depth1 >li').on('mouseleave', function(){
        if(device_status == 'pc'){
        $(this).removeClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
        $('header .inner .gnb ul.depth1 >li').removeClass('on')
        $('header').removeClass('menu_over')
        }
    })

	$('header .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    $('header .gnb ul.depth1 >li >a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();
            
            if($(this).parent().hasClass('on') == true){
                $(this).parent().removeClass('on')
            }else{
                $('header.menu_open .gnb ul.depth1 >li').removeClass('on')
                $(this).parent().addClass('on')
            }
        }
    })
    
    $('footer .familysite button').on('click', function(){
        
        $('footer .familysite').toggleClass('on')
    })
    
})