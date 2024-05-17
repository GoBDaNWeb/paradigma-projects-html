export const menu = () => {
  const burger = document.querySelector(".burger");
  const header = document.querySelector(".header");
  const menu = document.querySelector(".menu");
  const linkItems = document.querySelectorAll(".link-item");
  window.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.remove("active");
      header.classList.remove("menu-is-open");
      burger.classList.remove("active");
    }
  });
  if (linkItems) {
    linkItems.forEach((btn) => {
      btn.addEventListener("click", () => {
        burger.classList.remove("active");
        menu.classList.remove("active");
        header.classList.remove("menu-is-open");

        const scrollTo = document.querySelector(`#${btn.dataset.scroll}`);
        if (scrollTo) {
          window.scrollTo({
            top: scrollTo.offsetTop - 80,
            left: 0,
            behavior: "smooth",
          });
        }
      });
    });
  }

  burger.addEventListener("click", () => {
    if (burger.className.includes("active")) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      header.classList.remove("menu-is-open");
    } else {
      burger.classList.add("active");
      menu.classList.add("active");
      header.classList.add("menu-is-open");
    }
  });
};
