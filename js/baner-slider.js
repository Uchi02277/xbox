$(document).ready(function(){
    $(".baner__slider").slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 6000,
        easing: "ease",
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
    });
});