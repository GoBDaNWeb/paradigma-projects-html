import Swiper from "swiper";

import { Navigation, Pagination, Controller, Grid } from "swiper/modules";

export const swiper = () => {
  const swiper1 = new Swiper(".afisha-swiper", {
    modules: [Navigation, Controller, Pagination],
    slidesPerView: 1,
    navigation: {
      prevEl: ".afisha-nav-prev",
      nextEl: ".afisha-nav-next",
    },
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      //@ts-ignore
      el: ".afisha-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  const swiper2 = new Swiper(".afisha-info-swiper", {
    modules: [Controller],
    slidesPerView: 1,
    allowTouchMove: false,
    grabCursor: false,

    centeredSlides: true,
    spaceBetween: 10,
  });
  swiper1.controller.control = swiper2;
  swiper2.controller.control = swiper1;

  const swiper3 = new Swiper(".gallery-swiper", {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 4,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 30,
    pagination: {
      //@ts-ignore
      el: ".gallery-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      prevEl: ".gallery-nav-prev",
      nextEl: ".gallery-nav-next",
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      767: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 4,
      }
    }
  });
  const swiper4 = new Swiper(".service-modal-swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      prevEl: ".service-modal-nav-prev",
      nextEl: ".service-modal-nav-next",
    },
  });
};
