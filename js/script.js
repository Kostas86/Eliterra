$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        variableWidth: true,

    });
    $('.partners_slider').slick({
        arrows: false,
        dots: true,
        centerMode: false,
        variableWidth: true,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        variableWidth: false,

    });
    var $adressPoint = $('[data-js-map]');

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

        myPlacemarkOne = new ymaps.Placemark([52.34615042628716, 35.344413358213544], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/main_map_point.svg',
            iconImageSize: [33, 47],
        });
        myMap.geoObjects.add(myPlacemarkOne);

        myPlacemarkTwo = new ymaps.Placemark([52.349948771328286, 35.344407993795514], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/main_map_point.svg',
            iconImageSize: [33, 47],
        });
        myMap.geoObjects.add(myPlacemarkTwo);
        $adressPoint.on('click', function () {
            let value = $(this).attr('data-js-map');
            if (value == 'adrr1') {
                myMap.setCenter([52.34615042628716, 35.344413358213544], 18);
            } else if (value == 'adrr2') {
                myMap.setCenter([52.349948771328286, 35.344407993795514], 18);
            } else {
                console.log("error on map adrr");
            }
            return false;
        });
    }
    var $scrollTop = $('[data-js="scrollTop"]');
    var $documentBody = $('body, html');
    $scrollTop.on('click', function () {
        $documentBody.animate({
            scrollTop: 0
        }, '300');
        return false;
    });
    var $service = $('.service');
    var $location = $service.offset().top;
    var $height = $service.outerHeight();
    var $windowHeight = $(window).height();
    var $fixLocation = (($location + $height) - $windowHeight);
    $(document).scroll(function () {
        if ($(document).scrollTop() > $fixLocation){
$service.addClass('active');
        } else {
            $service.removeClass('active'); 
        }
    });
});



