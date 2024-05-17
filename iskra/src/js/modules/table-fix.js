export const tabeFix = () => {
  const verificationList = document.querySelector(".verification-list");
  const requestList = document.querySelector(".request-list");
  const searchList = document.querySelector(".search-list");
  const compensationList = document.querySelectorAll(".compensation-table-list");

  const tableFixFn = (list, count, mobCount) => {
    const table = list.querySelector("table");
    const headTable = table.querySelector("thead");
    window.addEventListener("scroll", () => {
      if (window.scrollY > table.offsetTop) {
        table.style.paddingTop = `${headTable.offsetHeight}px`;
        headTable.classList.add("fixed");
        headTable.style.top = `${
          window.innerWidth >= 1024
            ? window.scrollY - count
            : window.scrollY - mobCount
        }px`;
      } else {
        headTable.classList.remove("fixed");
        headTable.style.top = `0`;
        table.style.paddingTop = `0`;
      }
    });
  };

  if (verificationList) {
    tableFixFn(verificationList, 234, 63);
  }
  if (requestList) {
    tableFixFn(requestList, 234, 63);
  }
  if (searchList) {
    tableFixFn(searchList, 295, 143);
  }
  if(compensationList) {
    compensationList.forEach(list => {
      tableFixFn(list, 299, 130)
    })
  }
};
