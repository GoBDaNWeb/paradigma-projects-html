export const selector = () => {
  const themeSelector = document.querySelector(".theme-selector");
  const selectors = document.querySelectorAll(".selector");

  if (themeSelector) {
    const themeSelectorBtn = themeSelector.querySelector(".theme-selector-btn");
    const themeSelectorInputs = themeSelector.querySelectorAll("label");
    themeSelectorBtn.addEventListener("click", (e) => {
      if (themeSelector.className.includes("active")) {
        themeSelector.classList.remove("active");
      } else {
        themeSelector.classList.add("active");
      }
    });
    themeSelector.addEventListener("mouseleave", () => {
      themeSelector.classList.remove("active");
    });
    themeSelectorInputs.forEach((label) => {
      label.addEventListener("change", (e) => {
        const textBtn = themeSelectorBtn.querySelector("p");
        textBtn.textContent = e.target.nextElementSibling.textContent;
        themeSelector.classList.remove("active");
      });
    });
  }
  if (selectors) {
    selectors.forEach(selector => {
      const selectorBtn = selector.querySelector(".selector-btn");
      const selectorInputs = selector.querySelectorAll("label");
      selectorBtn.addEventListener("click", (e) => {
        if (selector.className.includes("active")) {
          selector.classList.remove("active");
        } else {
          selector.classList.add("active");
        }
      });
      selector.addEventListener("mouseleave", () => {
        selector.classList.remove("active");
      });
      selectorInputs.forEach((label) => {
        label.addEventListener("change", (e) => {
          const textBtn = selectorBtn.querySelector("p");
          textBtn.textContent = e.target.nextElementSibling.textContent;
          selector.classList.remove("active");
        });
      });
    })
    
  }
};
