import {closeModal, openModal} from "./utils/modal";
// import {switchComplectation} from "./utils/switchComplectation";
import {sliders} from "./utils/sliders";
import {fancyboxSliders} from "./utils/fancyboxSliders";
import {headerMenu} from "./utils/headerMenu";
import initYMap from './utils/initYMap';

function fireWhenReady(func) {
    document.addEventListener('DOMContentLoaded', func);
}

const fireAllFunctions = () => {
    openModal()
    closeModal()
    headerMenu()
    // switchComplectation()
    sliders()
    fancyboxSliders()
    initYMap()
    setTimeout(() => {
        document.body.style.opacity = 1;
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, 1000)
}

fireWhenReady(fireAllFunctions)
