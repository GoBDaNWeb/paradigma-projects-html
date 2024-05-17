export const radio = () => {
  const radios = document.querySelectorAll("input[type='radio']");
  const radiosWrapper = document.querySelectorAll(".custom-radio");
  const ownPriceInput = document.querySelector(".own-price-input");
  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const activeRadio = document.querySelector(".custom-radio.active");
      if (activeRadio) {
        activeRadio.classList.remove("active");
      }
      e.target.parentNode.classList.add("active");
      ownPriceInput.value = "";
    });
    ownPriceInput.addEventListener("input", (e) => {
      const { value } = e.target;
      if (value.length > 0) {
        const activeRadio = document.querySelector(".custom-radio.active");
        if (activeRadio) {
          activeRadio.classList.remove("active");
        }
      } else {
        radiosWrapper[0].classList.add("active");
      }
    });
  });
};
