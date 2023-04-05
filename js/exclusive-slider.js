$(document).ready(function(){
    $(".exclusive__slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
        easing: "ease",
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ],
    });
});