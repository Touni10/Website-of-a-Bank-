"use strict";
let Popup= document.querySelector(".popup");
let overlay = document.querySelector(".overlay");
let btnClosePopup= document.querySelector(".btn-close-popup");
let btnsOpenPopup= document.querySelectorAll(".btn-show-popup");
let section1 = document.querySelector("#fea-section");
let tabsContainer = document.querySelector(".operations-tab-container");
let tabs = document.querySelectorAll(".operations-tab");
let tabsContent = document.querySelectorAll(".operations-content");
let nav = document.querySelector(".nav");
let featureImage = document.querySelectorAll(".features-img");
// NavBar Animation
let handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    let link = e.target;
    let links = link.closest(".nav").querySelectorAll(".nav-link");
    let logo = link.closest(".nav").querySelector("img");

    links.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.3));
nav.addEventListener("mouseout", handleHover.bind(1));
// Features Section Images
const imageLoader = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imageLoader, {
  root: null,
  threshold: 0.5,
  rootMargin: "30px",
});

featureImage.forEach((img) => imageObserver.observe(img));
// PopUp Window And OverLay
const openPopUp = function (e) {
  e.preventDefault();
  Popup.classList.remove("hide");
  overlay.classList.remove("hide");
};
const closeModal = function () {
  Popup.classList.add("hide");
  overlay.classList.add("hide");
};
btnsOpenPopup.forEach((btn) => btn.addEventListener("click", openPopUp));
btnClosePopup.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// Operations Tabs
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations-tab");
  tabs.forEach((tab) => tab.classList.remove("tab-active"));
  tabsContent.forEach((con) => con.classList.remove("content-active"));
  clicked.classList.add("tab-active");
  document
    .querySelector(`.content-${clicked.dataset.tab}`)
.classList.add("content-active");
});

// Slider
 const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnNext = document.querySelector(".right-btn");
  const btnPrev = document.querySelector(".left-btn");
  let slide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (wantedSlide) {
    slides.forEach(
      (CurrentSlide, index) => (CurrentSlide.style.transform = `translateX(${100 * (index - wantedSlide)}%)`)
    );
  };
  goToSlide(0);

  const nextSlide = function () {
    if (slide === maxSlide - 1) {
      slide = 0;
    } else {
      slide++;
    }
    goToSlide(slide);
  };

  btnNext.addEventListener("click", nextSlide);

  const prevSlide = function () {
    if (slide === 0) {
      slide = maxSlide - 1;
    } else {
      slide--;
    }
    goToSlide(slide);
  };

  btnPrev.addEventListener("click", prevSlide);
};

slider();