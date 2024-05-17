import LazyLoad from "vanilla-lazyload";

import { Fancybox } from "@fancyapps/ui";
import { isBrowserSupportWebp } from "./modules/support-webp.js";
import IMask from "imask";

import { validInputs } from "./modules/valid-inputs.js";
import { formHandle } from "./modules/form-handle.js";
import { validateForm } from "./modules/validate.js";
import { swiper } from "./modules/swiper.js";
import { header } from "./modules/header.js";
import { fancy } from "./modules/fancy.js";
import { accordeonFunc } from "./modules/accordeon.js";
import { menu } from "./modules/menu.js";
import { modals } from "./modules/modals.js";
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
isBrowserSupportWebp();
//handleAttachFiles();
// validInputs();
// formHandle();
// validateForm();
swiper();
header();
fancy();
accordeonFunc();
menu();
modals();
let myLazyLoad = new LazyLoad();
myLazyLoad.update();
