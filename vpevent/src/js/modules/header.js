export const header = () => {
  const header = document.querySelector(".header");
  const logo = document.querySelector('.logo')

  logo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
};
