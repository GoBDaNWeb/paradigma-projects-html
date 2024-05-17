import IMask from "imask";

export const inputs = () => {
  const labelsWithPlaceholder = document.querySelectorAll(
    ".label-with-placeholder"
  );

  const phones = document.querySelectorAll("input[type='tel']");
  const series = document.querySelectorAll("input.pass-series");
  const numbers = document.querySelectorAll("input.pass-number");
  const dates = document.querySelectorAll("input.pass-date");
  const inn = document.querySelectorAll("input.pass-inn");

  if (phones) {
    phones.forEach((el) => {
      IMask(el, {
        mask: "+7 (000) 000-00-00",
      });
    });
  }
  if (series) {
    series.forEach((el) => {
      IMask(el, {
        mask: "00 00",
      });
    });
  }
  if (numbers) {
    numbers.forEach((el) => {
      IMask(el, {
        mask: "000000",
      });
    });
  }
  if (dates) {
    dates.forEach((el) => {
      IMask(el, {
        mask: "00.00.0000",
      });
    });
  }
  if (inn) {
    inn.forEach((el) => {
      IMask(el, {
        mask: "000-000-000 00",
      });
    });
  }
  const dateInputs = document.querySelectorAll(".date-input");

  if (dateInputs) {
    dateInputs.forEach((el) => {
      IMask(el, {
        mask: "00.00.0000",
      });
    });
  }

  labelsWithPlaceholder.forEach((label) => {
    const input = label.querySelector("input");
    const text = label.querySelector("p").innerHTML;
    window.addEventListener("DOMContentLoaded", () => {
      if (input.value.length > 0) {
        label.querySelector("p").innerHTML = "";
      }
    });
    input.addEventListener("focus", () => {
      label.querySelector("p").innerHTML = "";
    });
    input.addEventListener("blur", (e) => {
      label.querySelector("p").innerHTML = text;
      if (e.target.value.length > 0) {
        label.querySelector("p").innerHTML = "";
      } else {
        label.querySelector("p").innerHTML = text;
      }
    });
  });
};
