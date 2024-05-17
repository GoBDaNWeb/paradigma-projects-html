export const accordeonFunc = () => {
  const accordion = document.querySelectorAll(".accordion");
  if (accordion) {
    accordion.forEach((accordion) => {
      accordion.querySelectorAll(".accordion-item").forEach((item) => {
        item.style.maxHeight =
          item.querySelector(".accordion-title").scrollHeight + 2 + "px";
        item.addEventListener("click", (event) => {
          if (event.target.classList.contains("accordion-title")) {
            item.classList.toggle("active");
            if (item.classList.contains("active")) {
              // item.style.maxHeight = item.scrollHeight + "px";
              item.style.maxHeight =
                item.querySelector(".accordion-body").scrollHeight +
                110 +
                item.querySelector(".accordion-title").scrollHeight +
                "px";
            } else {
              item.style.maxHeight =
                item.querySelector(".accordion-title").scrollHeight + 2 + "px";
            }
          }
        });
      });
    });
  }
};
