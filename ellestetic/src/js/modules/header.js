export const header = () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }
  });
};