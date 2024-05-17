export const wheel = () => {
  const verificationList = document.querySelector(".verification-list");
  const requestList = document.querySelector(".request-list");
  const considerationOrder = document.querySelectorAll(".consideration-order");
  const compensationOrder = document.querySelectorAll(".compensation-table-list");
  if (verificationList) {
    verificationList.addEventListener("wheel", function (event) {
      event.preventDefault(); // Отменяем стандартное поведение колесика
      this.scrollLeft += event.deltaY; // Прокручиваем блок влево или вправо в зависимости от направления колеса
    });
  }
  if (requestList) {
    requestList.addEventListener("wheel", function (event) {
      event.preventDefault(); // Отменяем стандартное поведение колесика
      this.scrollLeft += event.deltaY; // Прокручиваем блок влево или вправо в зависимости от направления колеса
    });
  }
  if (considerationOrder) {
    considerationOrder.forEach((wrapper) => {
      wrapper.addEventListener("wheel", function (event) {
        event.preventDefault(); // Отменяем стандартное поведение колесика
        this.scrollLeft += event.deltaY; // Прокручиваем блок влево или вправо в зависимости от направления колеса
      });
    });
  }
  if (compensationOrder) {
    compensationOrder.forEach((wrapper) => {
      wrapper.addEventListener("wheel", function (event) {
        event.preventDefault(); // Отменяем стандартное поведение колесика
        this.scrollLeft += event.deltaY; // Прокручиваем блок влево или вправо в зависимости от направления колеса
      });
    });
  }
};
