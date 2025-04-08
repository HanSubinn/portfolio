const swiper1 = new Swiper('#swiper1', {
    // Optional parameters
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

  
  const swiper2 = new Swiper('#swiper2', {
    
    // Optional parameters
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: { //동작하기 위해서 프로퍼티 사용
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
      renderFraction: function (currentClass, totalClass) {
        // return '<span class="' + currentClass + '"></span>' +
        //         ' 번째 ' +
        //         '<span class="' + totalClass + '"></span>';
        return `
          <span class="${currentClass}"></span>
          번째
          <span class="${totalClass}"></span>
        `
      },
    },
  })


  const slideDuration = 3000;
  document.documentElement.style.setProperty('--slide-duration',`${slideDuration}ms`)
  // * :root {
  //  --slide-duration: 3s
  // }

  const swiper3 = new Swiper('#swiper3', {
    autoplay: {
      delay: slideDuration
    },
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `
        <span class="num">${current}</span>
        <div class="progress">
          <div class="bar"></div>
        </div>
        <span class="num">${total}</span>
        `
      },
    },
  })


  const btnPlayStop = document.querySelector('.btn-play-stop');
  const swiperElm = document.querySelector('#swiper4');
  let isPlaying = true; //play와 stop을 토글 하기 위한 변수
  const swiper4 = new Swiper('#swiper4', {
    autoplay: {
      delay: slideDuration
    },
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `
        <span class="num">${current}</span>
        <div class="progress">
          <div class="bar"></div>
        </div>
        <span class="num">${total}</span>
        `
      },
    },
  })

  btnPlayStop.addEventListener('click', () => {
    if(isPlaying) { //true = play, pause-icon => 슬라이드 멈춤
      swiper4.autoplay.stop();
      swiperElm.classList.add('reset')
      btnPlayStop.innerHTML = '<i class="ri-play-line"></i>'
    } else { //false = stop, play-icon => 슬라이드 리플레이
      swiper4.autoplay.start();
      swiperElm.classList.remove('reset')
      btnPlayStop.innerHTML = '<i class="ri-pause-line"></i>'
    }
    isPlaying = !isPlaying
  })


  const swiper5 = new Swiper('#swiper5', {
    autoplay: true,
    loop: true,
    slidesPerView: 1, //화면에 보여질 슬라이드 갯수 => 모바일기준
    spaceBetween: 10, //gap값 => css로 설정 권장
    // slidesPerGroup: 2, //한번에 슬라이딩 되는 슬라이드 갯수
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    // Responsive breakpoints (mob: 480이하/pc: 1440이상)
    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      860: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      1440: {
        slidesPerView: 4,
      }
    }
  })


  const swiper6 = new Swiper('#swiper6', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
  })

  // 구글에 swiper사이트에서 따옴