$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:3000,
        variableWidth:true,

    });
});
$(document).ready(function () {
    $('.partners_slider').slick({
        arrows: false,
        dots: true,
        centerMode: false,
        variableWidth:true,
        slidesToShow: 4,
        autoplay:true,
        autoplaySpeed:3000,
        adaptiveHeight:true,
        variableWidth:false,
    });
});
