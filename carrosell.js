const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // cssMode:true,
    loop: true,
    speed:100,
    // slidesPerView: 8,
    spaceBetween: 5,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      1020: {
        slidesPerView: 7,
        spaceBetween: 6
      },
      1090: {
        slidesPerView: 5,
        spaceBetween: 6
      },
      1100: {
        slidesPerView: 7,
        spaceBetween: 6
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    // cssMode:true,
    loop: true,
    // speed:100,
    slidesPerView: 3,
    spaceBetween:30,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });