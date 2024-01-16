/* 輪播圖 */
//初始化輪播圖
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".swiper-pagination").on("click", ".swiper-pagination-bullet", function () {
  // 獲取點擊的索引
  var index = $(this).index();

  // 跳轉到對應的輪播圖
  swiper.slideTo(index);
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    920: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }

});