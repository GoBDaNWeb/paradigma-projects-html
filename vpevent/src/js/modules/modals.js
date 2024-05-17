export const modals = () => {
  const afishaModals = document.querySelectorAll(".afisha-modal");
  const afishaModalsBtns = document.querySelectorAll(".afisha-about-btn");
  const serviceModals = document.querySelectorAll(".service-modal");
  const serviceModalsBtns = document.querySelectorAll(".service-about-btn");
  if (afishaModals && afishaModalsBtns) {
    afishaModalsBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filteredModals = Array.from(afishaModals).filter((modal) => {
          return modal.dataset.afisha === btn.dataset.afisha;
        });
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-modal");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          }
        });

        const tabs = filteredModals[0].querySelectorAll(".tab");
        const tabsContent = filteredModals[0].querySelectorAll(".tab-content");
        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            const activeTab = filteredModals[0].querySelector(".tab.fill");
            if (activeTab) {
              activeTab.classList.remove("fill");
            }
            tab.classList.add("fill");

            tabsContent.forEach((content) => {
              if (content.dataset.tabContent === tab.dataset.tabContent) {
                content.classList.remove("hidden");
              } else {
                content.classList.add("hidden");
              }
            });
          });
        });
      });
    });
  }
  if (serviceModals && serviceModalsBtns) {
    serviceModalsBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filteredModals = Array.from(serviceModals).filter((modal) => {
          return modal.dataset.service === btn.dataset.service;
        });
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-modal");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          }
        });
      });
    });
  }
};
