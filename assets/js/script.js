var swiper1 = new Swiper("#swiper1", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: "#next1",
    prevEl: "#prev1",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
  on: {
    slideChange: function () {
      var slides = swiper1.slides;
      var activeIndex = swiper1.activeIndex;

      document.querySelector("#next1").style.display = (activeIndex >= slides.length - swiper1.params.slidesPerView) ? "none" : "flex";
      document.querySelector("#prev1").style.display = (activeIndex === 0) ? "none" : "flex";
    },
  },
});

var swiper2 = new Swiper("#swiper2", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: "#next2",
    prevEl: "#prev2",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  on: {
    slideChange: function () {
      var slides = swiper2.slides;
      var activeIndex = swiper2.activeIndex;

      document.querySelector("#next2").style.display = (activeIndex >= slides.length - swiper2.params.slidesPerView) ? "none" : "flex";
      document.querySelector("#prev2").style.display = (activeIndex === 0) ? "none" : "flex";
    },
  },
});