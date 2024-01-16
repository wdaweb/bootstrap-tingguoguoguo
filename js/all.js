/* 大輪播圖 */
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

/* section02輪播圖 */
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

// 創建一個 MediaQueryList 物件，檢查視窗寬度是否在 md 尺寸以上
var mediaQuery = window.matchMedia('(min-width: 768px)');

/* section02 gsap動畫 */
$('.swiper-slide').hover(
  function () {
    // 只在 md 尺寸以上時執行動畫
    if (mediaQuery.matches) {
      var info = $(this).find('.info');
      gsap.to(info, {
        left: 72,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
    // 獲取當前 swiper-slide 的 data-image 属性值
    var newImageSrc = $(this).attr('data-image');

    // 設置 img 元素的 src 屬性為新的圖片
    $(this).find('img').attr('src', newImageSrc);
  },
  function () {
    // 只在 md 尺寸以上時執行動畫
    if (mediaQuery.matches) {
      var info = $(this).find('.info');
      gsap.to(info, {
        left: -149,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
    // 恢復原本的img src
    var originalImageSrc = $(this).find('img').data('original-src');
    $(this).find('img').attr('src', originalImageSrc);
  }
);

