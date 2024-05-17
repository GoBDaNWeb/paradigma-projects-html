import {switchPageScrollDesktop} from "./switchPageScroll";

export const openModal = () => {
    let modalTrigger = document.querySelectorAll('.modal-trigger');

    modalTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {

            const target = this.getAttribute('href').substr(1);

            const modalWindow = document.getElementById(target);

            if(modalWindow.classList) {
                modalWindow.classList.add('open');
                switchPageScrollDesktop(false)
            }

            event.preventDefault();
        });
    });
}

export const closeModal = () => {
    let closeBtns = document.querySelectorAll('.modal__close');
    let modalBodies = document.querySelectorAll('.modal__wrap');

    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            const modalWindow = this.parentNode.parentNode;
            modalWindow.classList.remove('open');
            switchPageScrollDesktop(true)
        });
    });

    modalBodies.forEach(function(modalBody) {
        const modalOverlay = modalBody.parentNode;
        modalOverlay.addEventListener('click', function(evt) {
            if (!modalBody.contains(evt.target)) {
                modalOverlay.classList.remove('open');
                switchPageScrollDesktop(true)
            }
        });
    });
}
