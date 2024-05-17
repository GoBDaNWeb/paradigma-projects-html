export const handleMobileMenu = () => {
  const burger = document.querySelector(".burger");
  const burgerAccount = document.querySelector(".account-burger");

  if (burgerAccount) {
    const menu = document.querySelector(".mobile-menu-account");
    if (menu) {
      const tabs = menu.querySelectorAll(".tab");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          menu.classList.remove("active");
          burgerAccount.classList.remove("active");
          document.body.removeAttribute("style");
        });
      });
      burgerAccount.addEventListener("click", () => {
        if (!menu.className.includes("active")) {
          menu.classList.add("active");
          burgerAccount.classList.add("active");
          document.body.style.overflow = "hidden";
        } else {
          menu.classList.remove("active");
          burgerAccount.classList.remove("active");
          document.body.removeAttribute("style");
        }
      });
      window.addEventListener("resize", (e) => {
        if (window.innerWidth >= 1400) {
          menu.classList.remove("active");
          document.body.removeAttribute("style");
        }
      });
    }
  } else {
    const menu = document.querySelector(".mobile-menu");
    if (menu) {
      const list = menu.querySelector(".list");
      const items = list.querySelectorAll("li");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          const block = document.querySelector(`#${item.dataset.scroll}`);
          menu.classList.remove("active");
          document.body.removeAttribute("style");
          burger.classList.remove("active");

          window.scrollTo({
            top: block.offsetTop - 100,
            left: 0,
            behavior: "smooth",
          });
        });
      });
      burger.addEventListener("click", () => {
        if (!menu.className.includes("active")) {
          menu.classList.add("active");
          burger.classList.add("active");
          document.body.style.overflow = "hidden";
        } else {
          menu.classList.remove("active");
          burger.classList.remove("active");
          document.body.removeAttribute("style");
        }
      });
      window.addEventListener("resize", (e) => {
        if (window.innerWidth >= 1400) {
          menu.classList.remove("active");
          document.body.removeAttribute("style");
        }
      });
    }
  }
};
