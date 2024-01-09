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