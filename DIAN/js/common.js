$(document).ready(function(){
    $('header .gnb ul.depth1 >li').on('mouseenter focusin', function(){
        $(this).addClass('on')
    })
    $('header .gnb ul.depth1 >li').on('mouseleave', function(){
        $(this).removeClass('on')
    })
})