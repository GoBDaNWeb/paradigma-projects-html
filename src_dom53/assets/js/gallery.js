import {closeModal, openModal} from "./utils/modal";
import {switchTabs} from "./utils/switchTabs";
import {sliders} from "./utils/sliders";
import {fancyboxSliders} from "./utils/fancyboxSliders";
import {headerMenu} from "./utils/headerMenu";

function fireWhenReady(func) {
    document.addEventListener('DOMContentLoaded', func);
}

const fireAllFunctions = () => {
    openModal()
    closeModal()
    headerMenu()
    try {
        switchTabs()
    } catch(e) {}
    sliders()
    fancyboxSliders()
    setTimeout(() => {
        document.body.style.opacity = 1;
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, 1000)
}

fireWhenReady(fireAllFunctions)
