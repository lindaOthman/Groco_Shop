let  homeHeight=$("#home").outerHeight();
$(window).scroll(function(){
    let x=$(window).scrollTop();
    if(x>=homeHeight){
        $('.btn-up').fadeIn(500);
    }else{
        $('.btn-up').fadeOut(500);
    }
})

$('.btn-up').click(function(){
    $(window).scrollTop(0)
})