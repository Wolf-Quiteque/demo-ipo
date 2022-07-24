let sectionLogin = document.querySelector(".s-login-acesso"),
  sectionRegister = document.querySelector(".s-register-acesso"),
  logar = document.querySelector(".js-btn-account-signIn"),
  entrar = document.querySelector(".js-btn-account-signUp");

entrar.addEventListener("click", () => {
  if (sectionLogin.classList.contains("ative")) {
    sectionLogin.classList.remove("ative");
    sectionRegister.classList.add("ative");
  }
});

logar.addEventListener("click", () => {
  if (sectionRegister.classList.contains("ative")) {
    sectionRegister.classList.remove("ative");
    sectionLogin.classList.add("ative");
  }
});
