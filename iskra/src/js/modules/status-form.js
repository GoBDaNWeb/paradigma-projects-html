export const statusForm = () => {
  const statusModal = document.querySelector(".status-modal");
  const statusModalSecond = document.querySelector(".status-modal.second");
  if (statusModal) {
    const rejectModal = document.querySelector(".reject-modal");

    const form = statusModal.querySelector("form");
    form.addEventListener("submit", (e) => {
      // e.preventDefault();
      var formData = new FormData(form);
      if (Object.fromEntries(formData).status === "rejected") {
        rejectModal.classList.add("active");
        statusModal.classList.remove("active");
      } else {
        statusModal.classList.remove("active");
        document.body.removeAttribute("style");
      }
    });
    const textareaReject = rejectModal.querySelector("textarea");
    textareaReject.addEventListener("input", (e) => {
      const submitBtn = rejectModal.querySelector(".submit-btn ");

      if (e.target.value.length > 0) {
        submitBtn.classList.remove("disable");
      } else {
        submitBtn.classList.add("disable");
      }
    });
  }
  if (statusModalSecond) {
    const rejectModal = document.querySelector(".reject-modal");
    const modificationStatusModal = document.querySelector(
      ".modification-status-modal"
    );
    const form = statusModalSecond.querySelector("form");

    form.addEventListener("submit", (e) => {
      // e.preventDefault();
      var formData = new FormData(form);
      if (Object.fromEntries(formData).status === "rejected") {
        rejectModal.classList.add("active");
        statusModalSecond.classList.remove("active");
      } else if (Object.fromEntries(formData).status === "modification") {
        modificationStatusModal.classList.add("active");
        statusModalSecond.classList.remove("active");
      } else {
        statusModalSecond.classList.remove("active");
        document.body.removeAttribute("style");
      }
    });
    const textareaReject = rejectModal.querySelector("textarea");
    textareaReject.addEventListener("input", (e) => {
      const submitBtn = rejectModal.querySelector(".submit-btn ");
      if (e.target.value.length > 0) {
        submitBtn.classList.remove("disable");
      } else {
        submitBtn.classList.add("disable");
      }
    });
    const textareaModification =
      modificationStatusModal.querySelector("textarea");
    textareaModification.addEventListener("input", (e) => {
      const submitBtn = modificationStatusModal.querySelector(".submit-btn ");
      if (e.target.value.length > 0) {
        submitBtn.classList.remove("disable");
      } else {
        submitBtn.classList.add("disable");
      }
    });
  }
};
