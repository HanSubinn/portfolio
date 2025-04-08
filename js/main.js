//메인비주얼 동영상 스와이퍼
const videoDuration = 15000;
document.documentElement.style.setProperty('--slide-duration',`${videoDuration}ms`)

const swiperMainVideo = new Swiper('.main_video_swiper', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: videoDuration,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current) {
            return `
            <div class="progress">
              <div class="bar"></div>
            </div>
            <div class="num"
                <span class="current">0${current}</span>
                <span class="total">/ 04</span>
            </div>
            `
          },
    },
});


//헤더 scroll_on
window.addEventListener('scroll', function() {
    if(window.scrollY > 30) {
        header.classList.add('scroll')
    } else {header.classList.remove('scroll')}
})


//헤더 dep2_on
const gnbDep2 = document.querySelectorAll('#gnb .dep2')
const gnbDep1 = document.querySelectorAll('#gnb .dep1')
gnbDep1.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        gnbDep2.forEach(function(d) {
            d.classList.add('dep2_on')
        })
    })
    item.addEventListener('mouseout', function() {
        gnbDep2.forEach(function(d) {
            d.classList.remove('dep2_on')
        })
    })
});

//헤더 dep2 흰 배경
// const gnbLink = document.querySelectorAll('#gnb .dep1>li')
// const gnbDepth2 = [...gnbLink].map(h => h.clientHeight)

// const gnbBg = document.querySelector('#gnb')

// const gnbDepth2Height = Math.max(...gnbDepth2);
// document.documentElement.style.setProperty('--gnb-height',`${gnbDepth2Height + 20}px`)

// console.log(gnbDepth2Height)

// gnbLink.forEach(function(gnb) {
//     // const gnbbg = document.createElement('div')
//     //     gnbbg.setAttribute('class', 'gnb_bg_test')

//     gnb.addEventListener('mouseover', function() {
//         gnbBg.classList.add('gnb_bg')
        
//         // document.querySelector('header').appendChild(gnbbg)
        
//     })
//     gnb.addEventListener('mouseout', function() {
//         gnbBg.classList.remove('gnb_bg')
//         // gnbbg.remove()
//     })
// })


// //헤더 search-box 팝업
const searchBtn = document.querySelector('.search_wrap button')
const searchBox = document.querySelector('.search_box')

searchBox.style.display = 'none'
searchBtn.addEventListener('click', function() {
    if(searchBox.style.display === 'none') {
        searchBox.style.display = 'flex'
    } else {
        searchBox.style.display = 'none'
    }
});



//크리치오 사진 크기 스크롤트리거
gsap.registerPlugin(ScrollTrigger);
const productMainImg = document.querySelector('.product_img_swiper .swiper-slide:first-child img')

// const aniProduct = gsap.timeline()
// aniProduct
//     .from(productMainImg, {scale: 10})
// ScrollTrigger.create({
//     animation: aniProduct,
//     trigger: '.new_product',
//     scrub: true,
//     pin: true,
// })

// 신제품 이미지 스와이퍼
const swiperNewProduct = new Swiper('.product_img_swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    slidesPerGroup: 1,
    spaceBetween: 0,
});
const swiperNewProductText = new Swiper('.product_text_swiper', {
    loop: true,
    effect: 'fade',
    slidesPerView: 'auto',
    // controller: {
    //     swiper: swiperNewProduct,
    // },
});
// swiperNewProduct.controller.control = swiperNewProductText;
// swiperNewProductText.controller.control = swiperNewProduct;

//브랜드 스와이퍼
var swiperBrandList = new Swiper('.brand_list_swiper', {
    freeMode: true,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
});

var swiperBrandImg = new Swiper ('.brand_img_swiper', {
    effect: 'fade',
    slidesPerView: 1,
    thumbs: {
        swiper: swiperBrandList
    },
});

//브랜드 h2 스크롤트리거

//동서 히스토리
const aniHistory = gsap.timeline()
aniHistory
    .from('.story_list .history', {x: -200, autoAlpha: 0})
    .from('.story_list .maxim_plant', {x: -200, autoAlpha: 0})
    .from('.story_list .contribution', {x: -200, autoAlpha: 0})

ScrollTrigger.create({
    effect: 'fade',
    animation: aniHistory,
    trigger: '.our_story',
    start: 'top 30%',
    // markers: true,
})

//식품안전센터


//뉴스 탭메뉴
const tabs = document.querySelectorAll('.tabs_wrap ul.tabs li')
const conbox = document.querySelectorAll('.media_center_contents .conbox')

tabs.forEach(function(item) {
    item.addEventListener('click', function() {
        tabs.forEach(function(c) {
            c.classList.remove('active')
        })
        this.classList.add('active')
    })
})

tabs.forEach(function(item) {
    item.addEventListener('click', function() {
        conbox.forEach(function(c) {
            c.classList.remove('conbox_on')
        })
        conbox[$].classList.add('conbox_on')
    })
})

//뉴스 탭 스와이퍼
// const swiperMediaCenter = new Swiper('.news_swiper_wrap', {
//     autoplay: {
//         delay: 0,
//     },
//     loop: true,
//     speed: 4000,
// });

//cf 스와이퍼
const swiperCfImg = new Swiper('.cf_swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
});

//cf 텍스트 스와이퍼
const swiperCfText = new Swiper('.cf_sub_swiper', {
    loop: true,
    // effect: 'fade',
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    centeredSlides: true,
});

//소셜미디어
const swiperSns = new Swiper('.sns_swiper', {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 5000,
    slidesPerView: 'auto',
    spaceBetween: 25,
});

//footer 사이트
const brandBtn = document.querySelector('.brand_site button')
const brandList = document.querySelector('.brand_site ul')

brandBtn.addEventListener('click', function() {
    if(brandList.style.display === 'none') {
        brandList.style.display = 'block'
    } else {
        brandList.style.display = 'none'
    }
})

const famBtn = document.querySelector('.family_site button')
const famList = document.querySelector('.family_site ul')

famBtn.addEventListener('click', function() {
    if(famList.style.display === 'none') {
        famList.style.display = 'block'
    } else {
        famList.style.display = 'none'
    }
})