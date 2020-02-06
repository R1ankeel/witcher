const mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".series__card-navigation"
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }
});

const menuButton = document.querySelector(".header-container__btn");
const menu = document.querySelector(".header-container");

menuButton.addEventListener("click", function() {
  menu.classList.toggle("header-container--active");

  if (menuButton.textContent === "☰") {
    menuButton.textContent = "X";
  } else {
    menuButton.textContent = "☰";
  }
});
