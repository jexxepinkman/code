$(document).ready(function(){
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

    $('header .gnb >ul.depth1 >li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header .gnb >ul.depth1 >li').addClass('on')
            $('header .tnb').addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        $('header .gnb >ul.depth1 >li').removeClass('on')
        $('header .tnb').removeClass('on')
    })

    $('header .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    $('header.menu_open .gnb ul.depth1 >li').on('click', function(){
        if(device_status == 'mobile'){
            if($(this).hasClass('on') == true){//열려있는 나 자신을 눌럿을때
                $(this).removeClass('on')
            }else{
                $('header.menu_open .gnb ul.depth1 >li').removeClass('on')
                $(this).addClass('on')
            }
        }
    })

    $('footer .familysite .open').on('click', function(){
        $('.familysite').addClass('on')
    })
    $('footer .familysite .close').on('click', function(){
        $('.familysite').removeClass('on')
    })

    
    

})