const verificaAna = document.querySelector(".verificaAna");

const verificaAnaInput = document.querySelector("#verificaAna__formInput");
const verificaAnaButton = document.querySelector(".verificaAna__button");
const verificaAnaError = document.querySelector(".verificaAna__formError");

const gallery = document.querySelector(".gallery");
const gallerySaudades = document.querySelector(".gallery__saudades");
const galleryFavorite = document.querySelector(".gallery__favorite");
const galleryNos = document.querySelector(".gallery__nos");
const galleryTudo = document.querySelector(".gallery__tudo");

const galleryUl = document.querySelector("gallery__footerUl");
const galleryLi = document.getElementsByClassName("gallery__footerLi");

verificaAnaButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (verificaAnaInput.value == "2021-06-08") {
    verificaAna.classList.remove("active");
    gallery.classList.add("active");
  } else {
    verificaAnaError.classList.add("active");
  }
});

for (let i = 0; i < galleryLi.length; i++) {
  galleryLi[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("activeLi");
    current[0].className = current[0].className.replace("activeLi", "");
    this.className += " activeLi";
  });
}

const sddsLi = document.querySelector(".sddsli");
const favLi = document.querySelector(".favLi");
const odioLi = document.querySelector(".odioLi");
const tudoLi = document.querySelector(".tudoLi");

sddsLi.addEventListener("click", () => {
  gallerySaudades.classList.add("active");
  galleryFavorite.classList.remove("active");
  galleryNos.classList.remove("active");
  galleryTudo.classList.remove("active");
});

favLi.addEventListener("click", () => {
  galleryFavorite.classList.add("active");
  gallerySaudades.classList.remove("active");
  galleryNos.classList.remove("active");
  galleryTudo.classList.remove("active");
});

odioLi.addEventListener("click", () => {
  galleryNos.classList.add("active");
  gallerySaudades.classList.remove("active");
  galleryFavorite.classList.remove("active");
  galleryTudo.classList.remove("active");
});

tudoLi.addEventListener("click", () => {
  galleryTudo.classList.add("active");
  gallerySaudades.classList.remove("active");
  galleryNos.classList.remove("active");
  galleryFavorite.classList.remove("active");
});
