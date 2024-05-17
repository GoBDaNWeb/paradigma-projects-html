import { closeModal, openModal } from "./utils/modal";
import { switchTabs } from "./utils/switchTabs";
import { sliders } from "./utils/sliders";
import { fancyboxSliders } from "./utils/fancyboxSliders";
import { headerMenu } from "./utils/headerMenu";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function fireWhenReady(func) {
  document.addEventListener("DOMContentLoaded", func);
}

const fireAllFunctions = () => {
  openModal();
  closeModal();
  headerMenu();
  switchTabs(".project-btn", ".project-content");
  sliders();
  fancyboxSliders();

  setTimeout(() => {
    document.body.style.opacity = 1;
    AOS.init({
      once: true,
      duration: 700,
    });
  }, 1000);
  setTimeout(
    () => {
      const popularSlider = new Swiper(".popular-slider-container", {
        slidesPerView: 1.45,
        spaceBetween: 16,
        breakpoints: {
          1004: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });

      let countSliderWidth =
        document.querySelector(".popular-slider").scrollWidth;

      const popularBlock = document.querySelector(".popular");
      const popularHeight = popularBlock.scrollHeight * 4;
      let countLeftSlider = 0;
      if (document.body.clientWidth >= 1025) {
        countLeftSlider =
          -countSliderWidth + window.innerWidth - window.innerWidth / 3.84;
      } else if (document.body.clientWidth >= 577) {
        countLeftSlider = -countSliderWidth / 1.7;
      } else {
        countLeftSlider = -countSliderWidth / 1.5;
      }
      const popularSliderScroll = gsap
        .fromTo(
          ".popular-slider",
          {
            transform: "translateX(100%)",
            scrollTrigger: {
              trigger: ".popular",
              end: "top 0%",
              scrub: 1,
              // markers: true
            },
          },
          {
            transform: `translateX(${countLeftSlider}px)`,
            duration: 1,
            scrollTrigger: {
              trigger: ".popular",
              scrub: 1,
              start: "top 200%",
              // markers: true
            },
          }
        )
        .eventCallback("onStart", () => {
          popularBlock.style.height = popularHeight + "px";
          ScrollTrigger.refresh(true);
          // console.log('start');
          // ScrollTrigger.update();
        });
    },
    document.body.clientWidth > 1025 ? 1000 : 1000
  );
};

fireWhenReady(fireAllFunctions);

const projectItems = document.querySelectorAll(".project-layout__item");

// if (projectItems) {
//   projectItems.forEach((item) => {
//     const changeBtn = item.querySelector(".change-btn");
//     changeBtn.addEventListener("click", () => {
//       const activeItem = document.querySelector(".project-layout__item.active");
//       if (activeItem) {
//         activeItem.classList.remove("active");
//       }
//       item.classList.add("active");
//     });
//   });
// }
