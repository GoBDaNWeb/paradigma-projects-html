import {initSortMenu} from "./utils/initSortMenu";
import {productCardImageSwitcher} from "./utils/productCardImageSwitcher";
import {initFilters} from "./utils/filters";
import {closeModal, openModal} from "./utils/modal";
import {headerMenu} from "./utils/headerMenu";

function fireWhenReady(func) {
    document.addEventListener('DOMContentLoaded', func);
}

const fireAllFunctions = () => {
    openModal()
    closeModal()
    headerMenu()
    initSortMenu()
    initFilters()
    productCardImageSwitcher()
}

fireWhenReady(fireAllFunctions)
