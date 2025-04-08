gsap.registerPlugin(ScrollTrigger);

/* 01. to(elm, {}) */
gsap.to('#box1', {
    //애니메이션 속성
    duration: 5,
    x: 500,
    rotation: 360,
})

/* 02. trigger */
gsap.to('#box2', {
    x: 600,
    duration: 3, //애니메이션 지속 시간
    delay: 1, //애니메이션 시작 지연, 1초 뒤
    scrollTrigger: '#box2' //시작점 설정
})

/* 03. scrollTrigger 객체 */
gsap.to('#box3', {
    x: 600,
    duration: 2,
    scrollTrigger: {
        trigger: '#box3',
        // markers: true, //개발할 때 트리거 위치 파악용도
    }
})

/* 04. start, end */
// 문자열 형태로 2개의 값
// 첫번째 값이 애니메이션 요소의 시작점, 두번째 값이 뷰포트의 시작위치
gsap.to('#box4', {
    x: 600,
    duration: 2,
    scrollTrigger: {
        trigger: '#box4',
        start: 'top 50%',
        end: 'bottom 50%',
        // markers: true,
    }
})

/* 05. toggleActions */
gsap.to('#box5', {
    xPercent: 700, //translateX(100%)
    duration: 3,
    scrollTrigger: {
        trigger: '#box5',
        start: 'top 50%',
        end: 'bottom 40%',
        toggleActions: "play none reverse none",
        // toggleActions : onEnter, onLeave, onEnterBack, onLeaveBack
        // play, pause, resume, reset, restart, complete, reverse, none => 사용가능 값
        // toggleActions: "play none none none" => default

        // markers: true,
    }
})

/* 06. scrub */
// 스크롤과 애니메이션을 동기화
// true를 사용하거나 숫자를 사용
// true는 0에 가까움
// 숫자가 클수록 애니메이션이 느려지고 부드러워짐
gsap.to('#box6', {
    x: 800,
    duration: 3,
    scrollTrigger: {
        trigger: '#box6',
        start: 'top 60%',
        end: 'bottom 30%',
        scrub: 3,
        // markers: true,
    }
})

/* 07. pin */
// 스크롤 범위 안에 있는 동안 화면에 고정하는 역할
gsap.to('#box7', {
    scale: 2,
    scrollTrigger: {
        trigger: '#box7',
        start: 'top 60%',
        end: 'bottom 30%',
        pin: true,
        // markers: true
    }
})

/* 08. from() */
gsap.from('#box8', {
    x: 800,
    scrollTrigger: {
        trigger: '#box8',
        start: 'top 60%',
        end: 'bottom 30%',
        // markers: true
    }
})

/* 09. 연습 */
gsap.to('#box9', {
    scale: 2,
    rotation: 360,
    background: "orange",
    duration: 2,
    scrollTrigger: {
        trigger: '#box9',
        start: 'top 60%',
        end: 'bottom 30%',
        toggleActions: "play none reverse none",
        // markers: true
    }
})

/* 10. timeline() */ 
// gsap.timeline({prop:val})
const timelineElm = gsap.timeline({
    scrollTrigger: {
        trigger: '#box10',
        start: 'top 60%',
        end: 'bottom 30%',
        scrub: 2,
        // markers: true
    }
})

timelineElm
    .to('#box10',{x: 800})
    .to('#box10',{rotation: -360})
    .to('#box10',{borderRadius: 100})


/* 11. create({}) */
const timelineElm2 = gsap.timeline()

ScrollTrigger.create({
    animation: timelineElm2,
    trigger: '#box11',
    start: 'top 60%',
    end: 'bottom 30%',
    scrub: 2,
    // markers: true
})

timelineElm2
    .to('#box11',{x: 700})
    .to('#box11',{rotation: 45})
    .to('#box11',{background: "green"})


/* 12. 연습 */
// create() 활용
// 왼쪽 800 -> 크기 2배, 보더래디우스(원형) 
// -> 제자리(왼쪽 0, 크기 200, 사각형)
// -> start / end => default
const timelineElm3 = gsap.timeline()

ScrollTrigger.create({
    animation: timelineElm3,
    trigger: '#box12',
    start: "bottom 90%",
    end: "top 20%",
    scrub: 2,
    markers: true
})

timelineElm3
    .to('#box12',{x: 800})
    .to('#box12',{scale: 2, borderRadius: 200})
    .to('#box12',{x: 0, scale: 1, borderRadius: 0})