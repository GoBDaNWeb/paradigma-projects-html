export const tabs = () => {
  const tabs = document.querySelectorAll(".tab");
  if (tabs) {
    const tabContent = document.querySelectorAll(".tab-content");
    const tab1Content = document.querySelectorAll(".tab-1-content");
    const tab2Content = document.querySelectorAll(".tab-2-content");
    const backBtns = document.querySelectorAll(".back-btn");
    const nextStepBtns = document.querySelectorAll(".next-step");
    const nextStep2Btns = document.querySelectorAll(".next-step-2");
    const resetBtns = document.querySelectorAll(".reset-btn");
    const skipBtns = document.querySelectorAll(".skip-btn");
    const changeTabBtns = document.querySelectorAll(".change-tab")
    const changeTabBtns2 = document.querySelectorAll(".change-tab-2")
    let tabContentStep = 0;
    let tabContent2Step = 0;
    let tab2ContentType = ''
    const handleTab1Steps = () => {
      tabContentStep++;

      tab1Content.forEach((content) => {
        if (content.dataset.tab1Step == tabContentStep) {
          tabContent.forEach((content) => {
            content.classList.add("hidden");
          });
        }
      });
      const filteredContent = Array.from(tab1Content).filter((content) => {
        return content.dataset.tab1Step == tabContentStep;
      });
      const filteredRemoveContent = Array.from(tab1Content).filter(
        (content) => {
          return content.dataset.tab1Step != tabContentStep;
        }
      );
      filteredRemoveContent.forEach((content) => {
        content.classList.add("hidden");
      });
      filteredContent[0].classList.remove("hidden");
    };
    const handleTab2Steps = () => {
      tabContent2Step++;

      tab2Content.forEach((content) => {
        if (content.dataset.tab2Step == tabContent2Step ) {
          tabContent.forEach((content) => {
            content.classList.add("hidden");
          });
        }
      });
      const filteredContent = Array.from(tab2Content).filter((content) => {
        return content.dataset.tab2Step == tabContent2Step && content.dataset.compType === tab2ContentType;
      });
      const filteredRemoveContent = Array.from(tab2Content).filter(
        (content) => {
          return content.dataset.tab2Step != tabContent2Step;
        }
      );
      filteredRemoveContent.forEach((content) => {
        content.classList.add("hidden");
      });
      filteredContent[0].classList.remove("hidden");
    };

    backBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabContentStep--;

        tab1Content.forEach((content) => {
          if (content.dataset.tab1Step == tabContentStep) {
            tabContent.forEach((content) => {
              content.classList.add("hidden");
            });
          }
        });
        const filteredContent = Array.from(tab1Content).filter((content) => {
          return content.dataset.tab1Step == tabContentStep;
        });
        const filteredRemoveContent = Array.from(tab1Content).filter(
          (content) => {
            return content.dataset.tab1Step != tabContentStep;
          }
        );
        filteredRemoveContent.forEach((content) => {
          content.classList.add("hidden");
        });
        filteredContent[0].classList.remove("hidden");
      });
    });

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        tabContentStep = 0;
        tabContent2Step = 0;
        const activeTab = document.querySelectorAll(".tab.active");
        if (activeTab) {
          activeTab.forEach((tab) => {
            tab.classList.remove("active");
          });
        }
        e.target.classList.add("active");

        tabContent.forEach((content) => {
          if (content.dataset.tab === e.target.dataset.tab) {
            content.classList.remove("hidden");
          } else {
            content.classList.add("hidden");
          }
        });
        tab1Content.forEach((content) => {
          content.classList.add("hidden");
        });
        tab2Content.forEach((content) => {
          content.classList.add("hidden");
        });
      });
      if(changeTabBtns) {
        changeTabBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            const activeTab = document.querySelectorAll(".tab.active");
            const currentTab = document.querySelectorAll(".tab[data-tab='4']");
            if (activeTab) {
              activeTab.forEach((tab) => {
                tab.classList.remove("active");
              });
            }
            currentTab.forEach(tab => {
              tab.classList.add('active')
            })
            tabContent.forEach((content) => {
              if (content.dataset.tab === e.target.dataset.tab) {
                content.classList.remove("hidden");
              } else {
                content.classList.add("hidden");
              }
            });
          })
        })
      }
      if(changeTabBtns2) {
        changeTabBtns2.forEach(btn => {
          btn.addEventListener('click', (e) => {
            const currentTab = document.querySelectorAll("[data-tab2-step='2']");
            currentTab.forEach(tab => {
              if(tab.dataset.compType === btn.dataset.compType) {
                tab.classList.remove("hidden");
                tab.classList.add('active')
              }
            })
            tabContent.forEach((content) => {
              if (content.dataset.tab === e.target.dataset.tab) {
                content.classList.remove("hidden");
              } else {
                content.classList.add("hidden");
              }
            });
          })
        })
      }
    }); 

    if (nextStepBtns) {
      nextStepBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          handleTab1Steps();
        });
      });
    }
    if (nextStep2Btns) {
      nextStep2Btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          tab2ContentType = btn.dataset.compType
          handleTab2Steps();
        });
      });
    }
    if (resetBtns) {
      resetBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          tabContentStep = 0;
          handleTab1Steps();
        });
      });
    }

    const closeModalBtns = document.querySelectorAll(".close-modal-btn");
    const closeModal = document.querySelector(".close-modal");

    if (closeModalBtns && closeModal) {
      const cancelBtn = closeModal.querySelector(".cancel-btn");
      const applyBtn = closeModal.querySelector(".apply-btn");
      closeModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          closeModal.classList.add("active");
          document.body.style.overflow = "hidden";
        });
        window.addEventListener("click", (e) => {
          if (e.target === closeModal) {
            closeModal.classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
      applyBtn.addEventListener("click", () => {
        closeModal.classList.remove("active");
        document.body.removeAttribute("style");
      });
      cancelBtn.addEventListener("click", () => {
        closeModal.classList.remove("active");
        document.body.removeAttribute("style");
      });
    }

    if (skipBtns) {
      skipBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          tabContentStep = 5;
          handleTab1Steps();
        });
      });
    }
  }
};
