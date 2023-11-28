document.addEventListener("click", (e) => {
  if (e.target.closest(".hamburger")) return;
  navLinks.classList.remove("open");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

var mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    424: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

mySwiper.el.addEventListener("mouseenter", function () {
  mySwiper.autoplay.stop();
});

mySwiper.el.addEventListener("mouseleave", function () {
  mySwiper.autoplay.start();
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
