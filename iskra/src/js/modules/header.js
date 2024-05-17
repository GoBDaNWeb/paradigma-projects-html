export const header = () => {
  const header = document.querySelector("header");
  const profileBtn = header.querySelector(".profile");
  const notificationBtn = header.querySelector(".notification");

  if (profileBtn) {
    const hiddenContentProfile = profileBtn.querySelector(".hidden-menu");
    profileBtn.addEventListener("click", () => {
      const activeProfile = document.querySelector(".profile.active");
      if (activeProfile) {
        profileBtn.classList.remove("active");
      } else {
        profileBtn.classList.add("active");
      }
    });
    if (hiddenContentProfile) {
      hiddenContentProfile.addEventListener("mouseleave", () => {
        profileBtn.classList.remove("active");
      });
      window.addEventListener("touchstart", () => {
        profileBtn.classList.remove("active");
      });
    }
  }
  if (notificationBtn) {
    const hiddenContentNotification =
      notificationBtn.querySelector(".hidden-content");
    notificationBtn.addEventListener("click", () => {
      const activeNotification = document.querySelector(".notification.active");
      if (activeNotification) {
        notificationBtn.classList.remove("active");
      } else {
        notificationBtn.classList.add("active");
      }
    });
    if (hiddenContentNotification) {
      hiddenContentNotification.addEventListener("mouseleave", () => {
        notificationBtn.classList.remove("active");
      });
      window.addEventListener("touchstart", () => {
        notificationBtn.classList.remove("active");
      });
    }
  }

  const items = header.querySelectorAll("li");

  if (items) {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const block = document.querySelector(`#${item.dataset.scroll}`);
        window.scrollTo({
          top: block.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      });
    });
  }
};
