import { closeModal, openModal } from "./utils/modal";
import { headerMenu } from "./utils/headerMenu";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollToAnchor from "./utils/ScrollToAnchor";

// Swiper.use([Navigation, Pagination])

gsap.registerPlugin(ScrollTrigger);

function fireWhenReady(func) {
  document.addEventListener("DOMContentLoaded", func);
}

const fireAllFunctions = () => {
  // Якорные ссылки
  const header = document.querySelector("header");

  const topOffset = header.offsetHeight;
  const smoothScroll = new ScrollToAnchor({
    // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
    offset: topOffset,
    duration: document.body.clientWidth <= 768 ? 2000 : 3000,
  });

  // const scrollToUp = setInterval(() => window.scrollTo(0, 0), 500)
  // document.body.style.overflow = 'hidden';
  // setTimeout(() => {
  //     clearInterval(scrollToUp)
  // }, 500)
  setTimeout(() => {
    document.body.style.opacity = 1;
    document.body.style.overflow = null;
  }, 1000);
  openModal();
  closeModal();
  headerMenu();

  setTimeout(
    () => {

      const teamSlider = new Swiper(".team-slider-container", {
        slidesPerView: 1,
        spaceBetween: 25,
        allowTouchMove: true,
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: ".team-prev",
          nextEl: ".team-next",
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
            allowTouchMove: false,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });

      const teamSlide = () => {
        gsap.utils.toArray(".team-slide").forEach((image) => {
          gsap.fromTo(
            image,
            {
              y: 0,
            },
            {
              y: -150,
              scrollTrigger: {
                trigger: image,
                start: "top center",
                // markers: true,
                scrub: 1,
                stagger: {
                  amount: 0.4,
                },
              },
            }
          );
        });
      };
	  teamSlide()
      
    },
    document.body.clientWidth > 1025 ? 100 : 1000
  );
};

fireWhenReady(fireAllFunctions);
