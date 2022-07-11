let headerButton = document.querySelectorAll(".header-menu h2");
let headerTab = document.querySelectorAll(".header-tab");

headerButton.forEach((btn, index) => {
  btn.addEventListener("click", showTab);
  showTab();

  function showTab() {
    headerTab.forEach((e) => {
      e.classList.remove("actived");
    });

    headerButton.forEach((e) => {
      e.classList.remove("actived");
    });

    headerButton[index].classList.add("actived");
    headerTab[index].classList.add("actived");
  }
});
