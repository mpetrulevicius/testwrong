const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay:  {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 1000,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            allowSlidePrev: false,
            allowSlideNext: false,
        }
    }
  });

  