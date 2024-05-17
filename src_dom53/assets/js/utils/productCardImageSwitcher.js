export const productCardImageSwitcher = () => {
    const productCards = document.querySelectorAll('.card');

    productCards.forEach((productCard) => {
        const productImages = productCard.querySelector('.card__img')
        const images = productImages.querySelectorAll('img')

        if (images.length < 2) {
            images[0].style.display = 'block';
            return
        }

        const dotsWrap = document.createElement("div");

        dotsWrap.setAttribute('class', 'card__dots');
        productCard.append(dotsWrap)

        images.forEach((image, index) => {
            const dot = document.createElement("div");
            dot.setAttribute('class', `card__dots-item card__dots-item_${index}`)
            dotsWrap.append(dot)
        })

        const dots = dotsWrap.querySelectorAll('.card__dots-item')
        images[0].classList.add('active')
        dots[0].classList.add('active')

        productImages.addEventListener('mousemove', function(event) {
            let cursorX = event.clientX - productImages.getBoundingClientRect().left;

            let imageIndex = Math.floor(cursorX / productImages.offsetWidth * images.length);

            images.forEach(function(image) {
                if (image.classList.contains('active')) {
                    image.classList.remove('active');
                }
            });

            dots.forEach(function(item) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            dots[imageIndex]?.classList.add('active')
            images[imageIndex]?.classList.add('active');

        });

        productImages.addEventListener('mouseleave', function(event) {
            images.forEach(function(image) {
                if (image.classList.contains('active')) {
                    image.classList.remove('active');
                }
            });

            dots.forEach(function(item) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            dots[0]?.classList.add('active')
            images[0]?.classList.add('active');
        });
    })
}
