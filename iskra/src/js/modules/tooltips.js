export const tooltips = () => {
  const tooltipBtns = document.querySelectorAll(".tooltip-btn");
  if (tooltipBtns) {
    tooltipBtns.forEach((btn) => {
      btn.addEventListener("mouseover", (e) => {
        const tooltips = document.querySelectorAll(".tooltip");
        const filteredTooltips = Array.from(tooltips).filter((tooltip) => {
          return tooltip.dataset.tooltip === e.target.dataset.tooltip;
        });
        filteredTooltips[0].classList.add("active");
        filteredTooltips[0].addEventListener("mouseleave", (e) => {
          setTimeout(() => {
            filteredTooltips[0].classList.remove("active");
          }, 300);
        });
      });
      btn.addEventListener("mouseleave", (e) => {
        const tooltips = document.querySelectorAll(".tooltip");
        const filteredTooltips = Array.from(tooltips).filter((tooltip) => {
          return tooltip.dataset.tooltip === e.target.dataset.tooltip;
        });
        filteredTooltips[0].addEventListener("mouseover", (e) => {
          setTimeout(() => {
            filteredTooltips[0].classList.add("active");
          }, 300);
        });
        setTimeout(() => {
          filteredTooltips[0].classList.remove("active");
        }, 300);
      });
    });
  }
};
