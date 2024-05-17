const switchContent = (hiddenBtn, openingBtn, hiddenContent, openingContent) => {
    hiddenBtn.classList.remove('active');
    openingBtn.classList.add('active');

    hiddenContent.style.opacity = 0;
    setTimeout(() => {
        hiddenContent.style.display = 'none';
        openingContent.style.display = 'flex';
        setTimeout(() => {
            openingContent.style.opacity = 1;
        }, 100)
    }, 300)
}

export const switchComplectation = () => {
    let btn1 = document.getElementById('project-equipment__btn-warm-outline');
    let btn2 = document.getElementById('project-equipment__btn-with-trim');
    let content1 = document.getElementById('project-equipment__info-warm-outline');
    let content2 = document.getElementById('project-equipment__info-with-trim');
    btn1.classList.add('active');
    content1.style.display = 'flex';
    content1.style.opacity = 1;

    btn1.addEventListener('click', function() {
        switchContent(btn2, btn1, content2, content1)
    });

    btn2.addEventListener('click', function() {
        switchContent(btn1, btn2, content1, content2)
    });
}
