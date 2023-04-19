//Меню
document.querySelector(".open-search").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#search ").classList.add("active");
});

document.querySelector(".close-search").addEventListener("click", function () {
  document.querySelector("#search ").classList.remove("active");
});

//Скрол вверх
window.addEventListener("scroll", () => {
  const scrolledPixels =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  // Проверяем, пролистал ли пользователь более 200 пикселей
  if (scrolledPixels > 200) {
    document.getElementById("top").style = "display:block;";
  } else {
    document.getElementById("top").style = "display:none;";
  }
});

document.querySelector("#top").addEventListener("click", () => {
  // Находим элемент, на который нужно выполнить скролл (например, элемент с id "target")
  const targetElement = document.querySelector("body");

  // Выполняем скролл к элементу с анимацией
  targetElement.scrollIntoView({
    behavior: "smooth", // Добавляем анимацию скролла
    block: "start", // Выравниваем элемент по верхней границе окна
  });
});

// Поуказ сайтбара
const tooggle = document.querySelector("#sidebar-tooggle");
if (tooggle) {
  document
    .querySelector("#sidebar-tooggle")
    .addEventListener("click", function () {
      document.querySelector(".sidebar-tooggle").classList.toggle("show");
    });
}

//Попап

$(document).ready(function () {
  $(".thumbnails").magnificPopup({
    type: "image",
    delegate: "a",
    removalDelay: 500,
    gallery: {
      enabled: true,
    },
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });
});

