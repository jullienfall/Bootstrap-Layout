$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 20) {
            $('.navbar').css('background-color', 'rgba(14, 216, 214, 0.7)');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });
    
});