import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const swiper = () => {
  const swiper1 = new Swiper(".stocks-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    navigation: {
      prevEl: ".stocks-swiper-prev",
      nextEl: ".stocks-swiper-next",
    },
    pagination: {
      el: ".stocks-pagination",
      type: "fraction",
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  const swiper2 = new Swiper(".gallery-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 2.2,
    navigation: {
      prevEl: ".gallery-swiper-prev",
      nextEl: ".gallery-swiper-next",
    },
    pagination: {
      el: ".gallery-pagination",
      type: "fraction",
    },
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
    },
  });
  const swiper3 = new Swiper(".specialists-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 4.2,
    navigation: {
      prevEl: ".specialists-swiper-prev",
      nextEl: ".specialists-swiper-next",
    },
    loop: true,
    pagination: {
      el: ".specialists-pagination",
      type: "fraction",
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 1.8,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  const swiper4 = new Swiper(".equipments-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    navigation: {
      prevEl: ".equipments-swiper-prev",
      nextEl: ".equipments-swiper-next",
    },
    pagination: {
      el: ".equipments-pagination",
      type: "fraction",
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const swiper5 = new Swiper(".reviews-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    navigation: {
      prevEl: ".reviews-swiper-prev",
      nextEl: ".reviews-swiper-next",
    },
    loop: true,

    pagination: {
      el: ".reviews-pagination",
      type: "fraction",
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // const swiper6 = new Swiper(".service-gallery-swiper", {
  //   modules: [Navigation, Pagination],
  //   slidesPerView: 4,
  //   navigation: {
  //     prevEl: ".service-gallery-prev",
  //     nextEl: ".service-gallery-next",
  //   },
  //   pagination: {
  //     el: ".service-gallery-pagination",
  //     type: "fraction",
  //   },
  //   spaceBetween: 30,
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     767: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1024: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //   },
  // });
};
