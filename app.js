$(document).ready(function () {
    $(".slideshow ").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    function videoToggle() {
        vedio = $('.level-vedio').get(0);
        if (vedio.paused) {
            vedio.play();
            $('#video-contarols').hide();
            $('#video-pause').show();
    
        } else {
           vedio.pause();
           $('#video-contarols').show();
           $('#video-pause').hide();
        }
      }
      
      $('#video-contarols').click(function() {
        videoToggle();

      });

      $('#video-pause').click(function() {
        videoToggle();
      });
   
});



          