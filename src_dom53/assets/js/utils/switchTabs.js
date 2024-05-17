

export const switchTabs = (btn = '.switch-btn', content = '.switch-tab') => {
    btn = document.querySelectorAll(btn)
    content = document.querySelectorAll(content)
    btn[0].classList.add('active');
    content[0].style.display = 'flex';
    content[0].style.opacity = 1;
    btn.forEach((element, idx) => {
        element.addEventListener('click', () => {
            btn.forEach((el) => {
                el.classList.remove('active');
            })
            element.classList.add('active');
            content.forEach((i, id) => {
                i.style.opacity = 0;
                setTimeout(() => {
                    if (id != idx) {
                        i.style.display = 'none';
                    } else {
                        i.style.display = 'flex';
                        setTimeout(() => {
                            i.style.opacity = 1;
                        }, 100)
                    }
                }, 300)
            })
        })
    });
}
