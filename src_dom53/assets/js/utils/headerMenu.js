import {switchPageScrollDesktop} from "./switchPageScroll";

export const headerMenu = () => {
    const menuBtn = document.getElementById('header__menu-icon')
    const menu = document.querySelector('.modal__header-menu');
    const closeBtn = menu.querySelector('.modal__header-menu-close')

    if (menuBtn) {
        let count = 0
        menuBtn?.addEventListener('click', () => {
            if (count >= 1) {
                menu.classList.remove('open')
                switchPageScrollDesktop(true)
                count--;
            } else {
                menu.classList.add('open')
                switchPageScrollDesktop(false)
                count++;
            }
            
        })
    }

    closeBtn?.addEventListener('click', () => {
        menu.classList.remove('open')
        switchPageScrollDesktop(true)
    })
}
