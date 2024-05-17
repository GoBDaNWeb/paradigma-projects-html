export const representativeTab = () => {
  const representativeTabs = document.querySelectorAll(".representative-tab");
  const representativeList = document.querySelectorAll(
    ".representative-documents-content"
  );
  if (representativeTabs) {
    representativeTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const activeTab = document.querySelector(".representative-tab.active");
        const activeTabList = document.querySelector(
          ".representative-documents-content.active"
        );

        if (activeTab) {
          activeTab.classList.remove("active");
          activeTabList.classList.remove("active");
        }
        tab.classList.add("active");

        const filteredTabList = Array.from(representativeList).filter(
          (tabList) => {
            return tabList.dataset.tab === tab.dataset.tab;
          }
        );
        filteredTabList[0].classList.add("active");
      });
    });
  }
};
