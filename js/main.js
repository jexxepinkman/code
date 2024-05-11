/*
$(document).ready(function(){
    let scrolling 
    let obj = $('.visual .photo span')
    let objW
    let objW_default = 600
    let windowW 

    function photo_resize(){
        scrolling  = $(window).scrollTop()
        windowW = $(window).width()
        objW = objW_default + scrolling*2.7
        if(objW > windowW){
            objW = windowW
        }
        obj.width(objW)
        console.log(objW)
    }
    photo_resize()
    $(window).scroll(function(){
        photo_resize()
    })

})
*/