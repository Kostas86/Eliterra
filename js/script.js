$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,

    });
});
$(document).ready(function () {
    $('.partners_slider').slick({
        arrows: false,
        dots: true,
        centerMode: false,
        variableWidth: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        variableWidth: false,
    });
});
ymaps.ready(init);
var myMap,
    myPlacemarkOne,
    myPlacemarkTwo;

function init() {
    myMap = new ymaps.Map('map', {
        center: [52.34789823419812, 35.34420201918029],
        zoom: 16
    });
    myMap.controls
           .remove("rulerControl")
           .remove("searchControl")
           .remove("trafficControl")
           .remove("geolocationControl")
           .remove("routeEditor");
    myMap.behaviors.disable([
        // 'drag',
        'scrollZoom'
    ]);

    myPlacemarkOne = new ymaps.Placemark([52.34615042628716,35.344413358213544], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/main_map_point.svg',
        iconImageSize: [33, 47],
    });
    myMap.geoObjects.add(myPlacemarkOne);

    myPlacemarkTwo = new ymaps.Placemark([52.349948771328286,35.344407993795514], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/main_map_point.svg',
        iconImageSize: [33, 47],
    });
    myMap.geoObjects.add(myPlacemarkTwo);
}
