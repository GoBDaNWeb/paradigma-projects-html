import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Controller,
  FreeMode,
  Mousewheel,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";

export const swiper = () => {
  const swiper1 = new Swiper(".swiper-about", {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    navigation: {
      prevEl: ".swiper-about-prev",
      nextEl: ".swiper-about-next",
    },
    centeredSlides: true,
    loop: true,
    spaceBetween: 32,
    pagination: {
      //@ts-ignore
      el: ".swiper-about-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 18,
        slidesPerView: 1.1,
        centeredSlides: false,
        loop: false,
      },
      767: {
        spaceBetween: 18,
        slidesPerView: 2.4,
        centeredSlides: false,
        loop: false,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
      },
    },
  });
  const swiper8 = new Swiper(".swiper-about-photo", {
    modules: [Navigation, Pagination],
    slidesPerView: 2.4,
    navigation: {
      prevEl: ".swiper-about-prev",
      nextEl: ".swiper-about-next",
    },
    spaceBetween: 18,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      0: { spaceBetween: 18, slidesPerView: 1.1 },
      767: { spaceBetween: 18, slidesPerView: 2.4 },
    },
  });
  const swiper2 = new Swiper(".swiper-house", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    navigation: {
      prevEl: ".swiper-house-prev",
      nextEl: ".swiper-house-next",
    },
    spaceBetween: 10,
    pagination: {
      //@ts-ignore
      el: ".swiper-house-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
  });
  const swiper3 = new Swiper(".swiper-nutrition", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    navigation: {
      prevEl: ".swiper-nutrition-prev",
      nextEl: ".swiper-nutrition-next",
    },
    spaceBetween: 10,
    pagination: {
      //@ts-ignore
      el: ".swiper-nutrition-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
  });
  const swiper4 = new Swiper(".swiper-direction", {
    modules: [Navigation, Pagination],
    slidesPerView: 1.15,
    navigation: {
      prevEl: ".swiper-direction-prev",
      nextEl: ".swiper-direction-next",
    },
    spaceBetween: 30,
    pagination: {
      //@ts-ignore
      el: ".swiper-direction-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    breakpoints: {
      0: { spaceBetween: 10, slidesPerView: 1.05 },
      1024: { spaceBetween: 30, slidesPerView: 1.15 },
    },
  });
  const swiper5 = new Swiper(".swiper-rest", {
    modules: [Navigation, Pagination],
    slidesPerView: 3.1,
    navigation: {
      prevEl: ".swiper-rest-prev",
      nextEl: ".swiper-rest-next",
    },
    spaceBetween: 30,
    pagination: {
      //@ts-ignore
      el: ".swiper-rest-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 2.1 },
      1024: { slidesPerView: 3.1 },
    },
  });

  const defaultSwipers = document.querySelectorAll(".default-swiper");
  if (defaultSwipers) {
    defaultSwipers.forEach((swiper) => {
      const swiper6 = new Swiper(swiper.querySelector(".swiper-default"), {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        navigation: {
          prevEl: swiper.querySelector(".swiper-default-prev"),
          nextEl: swiper.querySelector(".swiper-default-next"),
        },
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
          //@ts-ignore
          el: swiper.querySelector(".swiper-default-pagination"),
          type: "bullets",
          bulletClass: "pagination-bullet",
          bulletActiveClass: "pagination-bullet-active",
          clickable: true,
        },
      });
    });
  }
  const swiper7 = new Swiper(".swiper-documents", {
    modules: [Navigation, Pagination],
    slidesPerView: 3.1,
    navigation: {
      prevEl: ".swiper-documents-prev",
      nextEl: ".swiper-documents-next",
    },
    spaceBetween: 30,
    pagination: {
      //@ts-ignore
      el: ".swiper-documents-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 2.1 },
      1024: { slidesPerView: 3.1 },
    },
  });
  const swiper10 = new Swiper(".partner-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    navigation: {
      prevEl: ".swiper-partner-prev",
      nextEl: ".swiper-partner-next",
    },
    spaceBetween: 30,
    pagination: {
      //@ts-ignore
      el: ".swiper-partner-pagination",
      type: "bullets",
      bulletClass: "pagination-bullet",
      bulletActiveClass: "pagination-bullet-active",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      767: { slidesPerView: 1.4 },
      1024: { slidesPerView: 2 },
    },
  });
};
