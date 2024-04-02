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
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
    })

    $('header .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    $('header .gnb ul.depth1 >li>a').on('click', function(e){
        
        if(device_status == 'mobile'){
            e.preventDefault();
            
            if($(this).parent().hasClass('on') == true){//열려있는 나 자신을 눌럿을때
                $(this).parent().removeClass('on')
            }else{
                $('header.menu_open .gnb ul.depth1 >li').removeClass('on')
                $(this).parent().addClass('on')
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