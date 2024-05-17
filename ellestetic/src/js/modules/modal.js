import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const modal = () => {
  const specialistBtn = document.querySelectorAll(".specialist-btn");
  const specialistModals = document.querySelectorAll(".specialist-modal");
  specialistBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filteredModals = Array.from(specialistModals).filter((modal) => {
        return modal.dataset.specialist === btn.dataset.specialist;
      });
      filteredModals[0].classList.add("active");
      document.body.style.overflow = "hidden";
      const closeBtn = filteredModals[0].querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        filteredModals[0].classList.remove("active");
        document.body.removeAttribute("style");
      });
      window.addEventListener("click", (e) => {
        if (e.target === filteredModals[0]) {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        } else {
          return;
        }
      });
    });
  });

  const successBtn = document.querySelectorAll(".success-btn");
  const successModal = document.querySelector(".success-modal");

  successBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      successModal.classList.add("active");
      document.body.style.overflow = "hidden";
      const closeBtn = successModal.querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        successModal.classList.remove("active");
        document.body.removeAttribute("style");
      });
      window.addEventListener("click", (e) => {
        if (e.target === successModal) {
          successModal.classList.remove("active");
          document.body.removeAttribute("style");
        } else {
          return;
        }
      });
    });
  });

  const serviceBtn = document.querySelectorAll(".service-btn");
  const serviceModals = document.querySelectorAll(".service-modal");
  serviceBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filteredModals = Array.from(serviceModals).filter((modal) => {
        return modal.dataset.service === btn.dataset.service;
      });
      filteredModals[0].classList.add("active");
      document.body.style.overflow = "hidden";

      const closeBtn = filteredModals[0].querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        filteredModals[0].classList.remove("active");
        document.body.removeAttribute("style");
      });
      window.addEventListener("click", (e) => {
        if (e.target === filteredModals[0]) {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        } else {
          return;
        }
      });
    });
  });
};

function ajaxService(servid) {
  console.log(servid);
  BX.ajax({
    url: "/teh/service.php", // файл на который идет запрос
    method: "POST", // метод запроса GET/POST
    // параметры передаваемый запросом
    data: {
      ELEMENT_ID: servid,
    },
    // ответ сервера лежит в data
    onsuccess: function (data) {
      document.querySelector("#serv-modal").innerHTML = data;
      const swiper6 = new Swiper(".service-gallery-swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        navigation: {
          prevEl: ".service-gallery-prev",
          nextEl: ".service-gallery-next",
        },
        pagination: {
          el: ".service-gallery-pagination",
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
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
    },
  });
}

const serviceAjaxBtn = document.querySelectorAll(".service-btn");
serviceAjaxBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    ajaxService(btn.dataset.servid);
  });
});
