export const registerForm = () => {
  const registerForm = document.querySelector(".register-form");
  if (registerForm) {
    const inputs = registerForm.querySelectorAll("label");
    inputs.forEach((label) => {
      label.addEventListener("input", (e) => {
        if (e.target.checked) {
          const activeLabel = registerForm.querySelector("label.active");
          if (activeLabel) {
            activeLabel.classList.remove("active");
          }
          label.classList.add("active");
        } else {
          label.classList.remove("active");
        }
      });
    });

    registerForm.addEventListener("submit", (e) => {
      // e.preventDefault();
    });
  }
};
