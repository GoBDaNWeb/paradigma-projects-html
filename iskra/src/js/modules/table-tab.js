export const tableTab = () => {
    const tableTab = document.querySelector('.compensation-table-tab')
    if(tableTab) {
        const tabContent = document.querySelectorAll('.compensation-table-list')
        const tabs = tableTab.querySelectorAll('.compensation-tab')
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const activeTab = tableTab.querySelector('.compensation-tab.active')
                if(activeTab) {
                    activeTab.classList.remove('active')
                }
                tab.classList.add('active')

                tabContent.forEach(content => {
                    content.classList.add('hidden')
                })
                const filteredContent = Array.from(tabContent).filter(content => {
                    return content.dataset.tab === tab.dataset.tab
                })  
                filteredContent[0].classList.remove('hidden')
            })
        })
    }
}