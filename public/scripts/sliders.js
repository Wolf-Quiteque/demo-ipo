let tabButton = document.querySelectorAll(".button .tab__button");
let tabContent = document.querySelectorAll(".tab__content");

tabButton.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContent.forEach((cont) => {
      cont.classList.remove("is__active");
    });

    tabButton.forEach((button) => {
      button.classList.remove("is__active");
    });

    tabContent[index].classList.add("is__active");
    tabButton[index].classList.add("is__active");
  });
});
