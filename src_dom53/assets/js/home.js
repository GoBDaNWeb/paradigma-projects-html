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

      gsap.to(".main", {
        transform: `translate(0px, -${
          document.querySelector(".popular").scrollHeight
        }px)`,
        marginBottom:
          document.body.clientWidth >= 1025
            ? -document.querySelector(".popular").scrollHeight / 2
            : -document.querySelector(".popular").scrollHeight / 3,
        borderRadius: document.body.clientWidth >= 1025 ? 30 : 15,
        scrollTrigger: {
          trigger: ".popular",
          top: "top 100%",
          end: "top center",
          scrub: 1,
        },
      });
      const popularBlock = document.querySelector(".popular");
      const popularHeight = popularBlock.scrollHeight * 3;
      let countLeftSlider = 0;
      if (document.body.clientWidth >= 1025) {
        countLeftSlider =
          -countSliderWidth + window.innerWidth - window.innerWidth / 3.84;
      } else if (document.body.clientWidth >= 577) {
        countLeftSlider = -countSliderWidth / 1.7;
      } else {
        countLeftSlider = -countSliderWidth / 1.5;
      }
      gsap
        .fromTo(
          ".popular-slider",
          {
            transform: "translateX(100%)",
            scrollTrigger: {
              trigger: ".popular",
              end: "top 0%",
              scrub: 1,
            },
          },
          {
            transform: `translateX(${countLeftSlider}px)`,
            duration: 1,
            scrollTrigger: {
              trigger: ".popular",
              scrub: 1,
            },
          }
        )
        .eventCallback("onStart", () => {
          popularBlock.style.height = popularHeight + "px";

          reviewScrollSlider();
        });

      const reviewSlider = new Swiper(".review-slider-container", {
        slidesPerView: 1,
        spaceBetween: 18,
        allowTouchMove: false,
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: ".review-prev",
          nextEl: ".review-next",
        },
      });
      let reviewSliderWidth =
        document.querySelector(".review-slider").scrollWidth;
      const reviewBlock = document.querySelector(".review");
      const reviewHeight =
        document.body.clientWidth > 1025
          ? reviewBlock.scrollHeight * 2
          : reviewBlock.scrollHeight * 3;
      const reviewScrollSlider = () => {
        document.body.clientWidth > 1025
          ? null
          : (reviewBlock.style.height = reviewHeight + "px");
        gsap
          .to(".review-slider", {
            transform: `translateX(${
              document.body.clientWidth > 1025
                ? -reviewSliderWidth + window.innerWidth - 600
                : -reviewSliderWidth + window.innerWidth - 200
            }px)`,
            duration: 1,
            scrollTrigger: {
              trigger: ".review",
              start:
                document.body.clientWidth > 1025 ? "top 30%" : "top -130px",
              end: "bottom 10%",
              scrub: 1,
              // markers: true
            },
          })
          .eventCallback("onStart", () => {
            document.body.clientWidth > 1025
              ? (reviewBlock.style.height = reviewHeight + "px")
              : null;
            document.body.clientWidth > 1025
              ? setTimeout(teamSlide, 300)
              : null;
          })
          .eventCallback("onComplete", () => {});
      };

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

      let mortgageSlider = new Swiper(".mortgage-construction__wrap", {
        slidesPerView: 1.8,
        spaceBetween: 40,
        breakpoints: {
          1004: {
            slidesPerView: 6.5,
            spaceBetween: 24,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    },
    document.body.clientWidth > 1025 ? 100 : 1000
  );
};

fireWhenReady(fireAllFunctions);
