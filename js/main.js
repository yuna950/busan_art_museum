const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,

  autoplay: {
    delay: 2500,
  },
});

// ----------------------------------------섹션1 슬라이드

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll > 900) {
    card1.classList.add("active");
  }

  if (scroll > 1100) {
    card2.classList.add("active");
  }

  if (scroll > 1350) {
    card3.classList.add("active");
  }
});

// ---------------------------------scroll event

const exhibitionSwiper = new Swiper(".exhibitionSwiper", {
  slidesPerView: "auto",

  spaceBetween: 35,

  loop: true,

  speed: 5000,

  allowTouchMove: true,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

// -------------------------------섹션 3스크롤
