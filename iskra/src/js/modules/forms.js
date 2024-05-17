export const forms = () => {
  const forms = document.querySelectorAll(".form-handler");
  if (forms) {
    forms.forEach((form) => {
      const inputs = form.querySelectorAll(".req");
      const nextStepBtn = form.querySelector(".next-step");
      const statementBtn = form.querySelector(".statement-btn");
      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          const filteredInputs = Array.from(inputs).filter((input) => {
            return input.value.length > 0;
          });
          if (inputs.length === filteredInputs.length) {
            if (nextStepBtn) {
              nextStepBtn.disabled = false;
            }
            if (statementBtn) {
              statementBtn.disabled = false;
            }
          } else {
            if (nextStepBtn) {
              nextStepBtn.disabled = true;
            }
            if (statementBtn) {
              statementBtn.disabled = true;
            }
          }
        });
      });
    });
  }
};
