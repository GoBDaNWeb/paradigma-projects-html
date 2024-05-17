export const modal = () => {
  const childInfoBtns = document.querySelectorAll(".child-info-btn");
  const representativeBtns = document.querySelectorAll(
    ".representative-info-btn"
  );
  const compensationBtns = document.querySelectorAll(
    ".compensation-info-btn"
  );
  if (childInfoBtns) {
    childInfoBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const childInfoModals = document.querySelectorAll(".info-card-child");
        const filteredModals = Array.from(childInfoModals).filter((modal) => {
          return modal.dataset.childid === e.target.dataset.childid;
        });
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        filteredModals[0].addEventListener("click", (e) => {
          // e.preventDefault();
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
    });
  }
  if (representativeBtns) {
    representativeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const representativeInfoModals = document.querySelectorAll(
          ".info-card-representative"
        );
        const filteredModals = Array.from(representativeInfoModals).filter(
          (modal) => {
            return (
              modal.dataset.representativeid ===
              e.target.dataset.representativeid
            );
          }
        );
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        filteredModals[0].addEventListener("click", (e) => {
          // e.preventDefault();
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
    });
  }
  if (compensationBtns) {
    compensationBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const compensationInfoModals = document.querySelectorAll(
          ".compensation-info-card"
        );
        const filteredModals = Array.from(compensationInfoModals).filter(
          (modal) => {
            return (
              modal.dataset.compensationid ===
              e.target.dataset.compensationid
            );
          }
        );
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        filteredModals[0].addEventListener("click", (e) => {
          // e.preventDefault();
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
    });
  }

  const statusBtns = document.querySelectorAll(".status-btn");
  const status2Btns = document.querySelectorAll(".status-2-btn");
  const status3Btns = document.querySelectorAll(".status-3-btn");

  if (statusBtns) {
    const statusModal = document.querySelector(".status-modal");

    statusBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        statusModal.classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = statusModal.querySelector(".close-btn");

        window.addEventListener("click", (e) => {
          if (e.target === statusModal) {
            statusModal.classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
        closeBtn.addEventListener("click", () => {
          statusModal.classList.remove("active");
          document.body.removeAttribute("style");
        });
      });
    });
  }
  if (status2Btns) {
    const statusModal = document.querySelector(".status-modal.second");
    status2Btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        statusModal.classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = statusModal.querySelector(".close-btn");

        window.addEventListener("click", (e) => {
          if (e.target === statusModal) {
            statusModal.classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
        closeBtn.addEventListener("click", () => {
          statusModal.classList.remove("active");
          document.body.removeAttribute("style");
        });
      });
    });
  }
  if (status3Btns) {
    const statusModal = document.querySelector(".status-modal.third");
    status3Btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        statusModal.classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = statusModal.querySelector(".close-btn");

        window.addEventListener("click", (e) => {
          if (e.target === statusModal) {
            statusModal.classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
        closeBtn.addEventListener("click", () => {
          statusModal.classList.remove("active");
          document.body.removeAttribute("style");
        });
      });
    });
  }
  const rejectModal = document.querySelector(".reject-modal");

  if (rejectModal) {
    const closeBtn = rejectModal.querySelector(".close-btn");

    window.addEventListener("click", (e) => {
      if (e.target === rejectModal) {
        rejectModal.classList.remove("active");
        document.body.removeAttribute("style");
      } else {
        return;
      }
    });
    closeBtn.addEventListener("click", () => {
      rejectModal.classList.remove("active");
      document.body.removeAttribute("style");
    });
  }
  const modificationStatusModal = document.querySelector(
    ".modification-status-modal"
  );

  if (modificationStatusModal) {
    const closeBtn = modificationStatusModal.querySelector(".close-btn");

    window.addEventListener("click", (e) => {
      if (e.target === modificationStatusModal) {
        modificationStatusModal.classList.remove("active");
        document.body.removeAttribute("style");
      } else {
        return;
      }
    });
    closeBtn.addEventListener("click", () => {
      modificationStatusModal.classList.remove("active");
      document.body.removeAttribute("style");
    });
  }

  const commentModalBtns = document.querySelectorAll(".comment-modal-btn");

  if (commentModalBtns) {
    commentModalBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const commentModals = document.querySelectorAll(".comment-modal");
        const filteredModals = Array.from(commentModals).filter((modal) => {
          return modal.dataset.commentid === e.target.dataset.commentid;
        });
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        filteredModals[0].addEventListener("click", (e) => {
          // e.preventDefault();
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
    });
  }
  const modificationModalBtns = document.querySelectorAll(
    ".modification-modal-btn"
  );

  if (modificationModalBtns) {
    modificationModalBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const modificationModals = document.querySelectorAll(
          ".modification-modal"
        );
        const filteredModals = Array.from(modificationModals).filter(
          (modal) => {
            return (
              modal.dataset.modificationid === e.target.dataset.modificationid
            );
          }
        );
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-btn");
        const mainBtn = filteredModals[0].querySelector(".change-tab");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        mainBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        filteredModals[0].addEventListener("click", (e) => {
          // e.preventDefault();
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
    });
  }
  const compensationModalBtns = document.querySelectorAll(
    ".compensation-modal-btn"
  );

  if (compensationModalBtns) {
    compensationModalBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const compensationModals = document.querySelectorAll(
          ".compensation-modal"
        );
        const filteredModals = Array.from(compensationModals).filter(
          (modal) => {
            console.log(modal);
            return (
              modal.dataset.compensationid === e.target.dataset.compensationid
            );
          }
        );
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-btn");
        const mainBtn = filteredModals[0].querySelector(".change-tab-2");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        mainBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        filteredModals[0].addEventListener("click", (e) => {
          // e.preventDefault();
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
    });
  }
  const rejectOrderModalBtns = document.querySelectorAll(
    ".reject-order-modal-btn"
  );

  if (rejectOrderModalBtns) {
    rejectOrderModalBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const rejectOrderModals = document.querySelectorAll(
          ".reject-order-modal"
        );

        const filteredModals = Array.from(rejectOrderModals).filter((modal) => {
          return modal.dataset.rejectorderid === e.target.dataset.rejectorderid;
        });
        filteredModals[0].classList.add("active");
        document.body.style.overflow = "hidden";
        const closeBtn = filteredModals[0].querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          filteredModals[0].classList.remove("active");
          document.body.removeAttribute("style");
        });
        filteredModals[0].addEventListener("click", (e) => {
          // e.preventDefault();
        });
        window.addEventListener("click", (e) => {
          if (e.target === filteredModals[0]) {
            filteredModals[0].classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
    });
  }

  const dataChangeBtns = document.querySelectorAll(".data-change-btn");
  if (dataChangeBtns) {
    const dataChangeModal = document.querySelector(".data-change-modal");
    if (dataChangeModal) {
      const fileInput = dataChangeModal.querySelector(".file-input");
      const fileText = dataChangeModal.querySelector(".documents-modal-list");
      const closeBtn = dataChangeModal.querySelector(".close-btn");
      dataChangeBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          dataChangeModal.classList.add("active");
          document.body.style.overflow = "hidden";
        });
        closeBtn.addEventListener("click", (e) => {
          dataChangeModal.classList.remove("active");
          document.body.removeAttribute("style");
        });
        window.addEventListener("click", (e) => {
          if (e.target === dataChangeModal) {
            dataChangeModal.classList.remove("active");
            document.body.removeAttribute("style");
          } else {
            return;
          }
        });
      });
      let arrayFiles = [];
      if(fileInput) {
        fileInput.addEventListener("input", () => {
          arrayFiles = [...arrayFiles, ...fileInput.files];
  
          
          fileText.style.marginTop = "30px";
          for (var i = 0; i < fileInput.files.length; i++) {
            const template = `<p>${
              fileInput.files[i].name.substr(0, 10) + "..."
            }<span>${
              fileInput.files[i].name.length > 10
                ? fileInput.files[i].name.split(".").at(-1)
                : ""
            }</span></p>`;
            fileText.innerHTML += template;
  
            // a.innerHTML = fileInput.files[i].name;
          }
        });
      }
      
    }
  }

  const fullMapBtn = document.querySelector(".full-map-btn");
  if (fullMapBtn) {
    const mapModal = document.querySelector(".map-modal");
    const closeBtn = mapModal.querySelector(".close-btn");
    fullMapBtn.addEventListener("click", () => {
      mapModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
    closeBtn.addEventListener("click", () => {
      mapModal.classList.remove("active");
      document.body.removeAttribute("style");
    });
  }
};
