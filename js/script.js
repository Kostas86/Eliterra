$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay:false,
        autoplaySpeed:3000,
        variableWidth:true,

    });
});
$(document).ready(function () {
    $('.partners_slider').slick({
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 3,
        variableWidth:true,
    });
});