export const initFilters = () => {
    const filterItems = document.querySelectorAll('.catalog__filter-item-param')

    filterItems.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}
