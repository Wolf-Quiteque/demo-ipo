let btn_money = document.querySelector("#btn-getMoney");
let la = document.querySelector("#la");

btn_money.addEventListener("click", (event) => {
  // event.preventDefault();
  let getMoney = document.querySelector("#getMoney").value;

  if (getMoney === " ") {
    alert("erro");
  } else {
    alert("false");
  }
});

// alert("luanda");
