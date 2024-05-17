export const initSortMenu = () => {
    const catalogSortBtn = document.getElementById('catalog-sort-btn');
    const catalogSortOptions = document.querySelector('.catalog__sort-options');

    document.addEventListener('click', (event) => {
        !catalogSortBtn.contains(event.target) && catalogSortOptions.classList.remove('open');
    })

    catalogSortBtn.addEventListener('click', () => {
        catalogSortOptions.classList.toggle('open')
    })
}
