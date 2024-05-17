export const sliders = () => {
  const galleryDots = new Swiper(".project-gallery__wrap", {
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        direction: "horizontal",
        slidesPerView: "auto",
        freeMode: false,
        spaceBetween: "16px",
      },
      768: {
        direction: "horizontal",
        freeMode: false,
        spaceBetween: "10px",
        slidesPerView: "auto",
      },
      1004: {
        spaceBetween: "7px",
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
      },
      1420: {
        spaceBetween: "10px",
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
      },
      1900: {
        spaceBetween: "16px",
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
      },
    },
  });

  const gallerySlider = new Swiper(".project-gallery__item_big", {
    effect: "creative",
    speed: 1500,
    followFinger: false,
    creativeEffect: {
      prev: {
        translate: ["-30%", 0, 0],
        scale: 1.1,
      },
      next: {
        translate: ["+110%", 0, 0],
        scale: 1.1,
      },
    },
    thumbs: {
      swiper: galleryDots,
    },
  });

  const galleryKingisepp = new Swiper(".project-gallery-kingisepp__wrap", {
    navigation: {
      nextEl: ".project-gallery-kingisepp__navigation .navigation__next",
      prevEl: ".project-gallery-kingisepp__navigation .navigation__prev",
    },
    breakpoints: {
      320: {
        spaceBetween: "20px",
        slidesPerView: "auto",
      },
      768: {
        spaceBetween: "24px",
        slidesPerView: "auto",
      },
      1004: {
        spaceBetween: "16px",
        slidesPerView: 3,
      },
      1420: {
        spaceBetween: "24px",
        slidesPerView: 3,
      },
    },
  });

  let similarSlider = new Swiper(".project-similar__wrap", {
    slidesPerView: "auto",
    mousewheel: true,
    breakpoints: {
      320: {
        spaceBetween: "16px",
      },
      768: {
        spaceBetween: "20px",
      },
      1004: {
        spaceBetween: "24px",
      },
    },
  });

  let foundationSlider = new Swiper(".project-foundation__wrap", {
    navigation: {
      nextEl: ".project-foundation__navigation .navigation__next",
      prevEl: ".project-foundation__navigation .navigation__prev",
    },
    breakpoints: {
      320: {
        spaceBetween: "20px",
        slidesPerView: 1,
      },
      768: {
        spaceBetween: "23px",
        direction: "horizontal",
        slidesPerView: "auto",
      },
      1004: {
        spaceBetween: "16px",
        slidesPerView: 3,
      },
      1420: {
        spaceBetween: "23px",
        slidesPerView: 3,
      },
    },
  });

  let mortgageSlider = new Swiper(".mortgage-construction__wrap", {
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: "40px",
        enabled: true,
      },
      768: {
        enabled: false,
      },
    },
  });

  let projectsSwiper1 = new Swiper(".project-swiper-1", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    speed: 800,
    allowTouchMove: false,
    grabCursor: false,
    on: {
      init: function (swiper) {
        swiper.realIndex = 1
      },
    },
  });
  let projectsSwiper2 = new Swiper(".project-swiper-2", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    speed: 800,
    allowTouchMove: false,
    grabCursor: false,
    on: {
      init: function (swiper) {
        swiper.realIndex = 2
      },
    },
  });
  let projectsSwiper3 = new Swiper(".project-swiper-3", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    speed: 800,
    allowTouchMove: false,
    grabCursor: false,
    on: {
      init: function (swiper) {
        swiper.realIndex = 3
      },
    },
  });
  let projectsSwiper4 = new Swiper(".project-swiper-4", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    speed: 800,
    allowTouchMove: false,
    grabCursor: false,
    on: {
      init: function (swiper) {
        swiper.realIndex = 4
      },
    },
  });
 
  let projectsSwiper5 = new Swiper(".project-swiper-5", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    speed: 800,
    allowTouchMove: false,
    grabCursor: false,
    on: {
      init: function (swiper) {
        swiper.realIndex = 5
      },
    },
  });

  let projectsSwiperWrapper = new Swiper(".projects-swiper-wrapper", {
    slidesPerView: 4.3,
    spaceBetween: 20,
    allowTouchMove: false,
    grabCursor: false,
    centeredSlides: true,
    on: {
      init: function (swiper) {
        swiper.activeIndex = 2
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
     
      1004: {
        slidesPerView: 3.2,
      },
      1260: {
        slidesPerView: 4.3,
      },
    },
  });
 

  let projectsStepsSwiper = new Swiper(".project-steps-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: ".projects-steps-navigation__next",
      prevEl: ".projects-steps-navigation__prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1004: {
        slidesPerView: 3,
      },
      1260: {
        slidesPerView: 4,
      },
    },
  });
};
