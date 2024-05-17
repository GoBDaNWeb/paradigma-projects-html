import LazyLoad from "vanilla-lazyload";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { isBrowserSupportWebp } from "./modules/support-webp.js";
import IMask from "imask";

import { validInputs } from "./modules/valid-inputs.js";
import { formHandle } from "./modules/form-handle.js";
import { validateForm } from "./modules/validate.js";
import { swiper } from "./modules/swiper.js";
import { header } from "./modules/header.js";
import { radio } from "./modules/radio.js";
import { map } from "./modules/map.js";
import { modal } from "./modules/modal.js";
import { fancy } from "./modules/fancy.js";

isBrowserSupportWebp();
//handleAttachFiles();
validInputs();
formHandle();
validateForm();
swiper();
header();
radio();
map();
modal();
fancy();
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

let myLazyLoad = new LazyLoad();
myLazyLoad.update();
