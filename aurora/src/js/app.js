import LazyLoad from "vanilla-lazyload";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { isBrowserSupportWebp } from "./modules/support-webp.js";
import IMask from "imask";

import { validInputs } from "./modules/valid-inputs.js";
import { formHandle } from "./modules/form-handle.js";
import { validateForm } from "./modules/validate.js";
import { selector } from "./modules/selector.js";
import { datePicker } from "./modules/date-picker.js";
import { swiper } from "./modules/swiper.js";
import { fancy } from "./modules/fancy.js";
import { accordeonFunc } from "./modules/accordeon.js";
import { map } from "./modules/map.js";
import { cardsAnim } from "./modules/cards-anim.js";
import { tabs } from "./modules/tabs.js";
import { mobileMenu } from "./modules/mobile-menu.js";

datePicker();
selector();
isBrowserSupportWebp();
swiper();
fancy();
accordeonFunc();
map();
cardsAnim();
tabs();
mobileMenu();
//handleAttachFiles();
// validInputs();
// formHandle();
// validateForm();

let myLazyLoad = new LazyLoad();
myLazyLoad.update();
