const verificaAna = document.querySelector(".verificaAna");
const gallery = document.querySelector(".gallery");

const verificaAnaInput = document.querySelector("#verificaAna__formInput");
const verificaAnaButton = document.querySelector(".verificaAna__button");
const verificaAnaError = document.querySelector(".verificaAna__formError");

verificaAnaButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (verificaAnaInput.value == "2021-06-08") {
    verificaAna.classList.remove("active");
    gallery.classList.add("active");
  } else {
    verificaAnaError.classList.add("active");
  }
});
