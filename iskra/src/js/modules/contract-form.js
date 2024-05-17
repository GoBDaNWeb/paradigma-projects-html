export const contractForm = () => {
  const contractForm = document.querySelector(".contract-form");
  if (contractForm) {
    const checkbox = contractForm.querySelector("label");
    const submitBtn = contractForm.querySelector(".submit-btn");
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        submitBtn.classList.remove("disable");
      } else {
        submitBtn.classList.add("disable");
      }
    });
  }
};
