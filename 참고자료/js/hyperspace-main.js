// 버튼 클릭하면 원하는 위치로 자동 스크롤(ex.탑버튼)
const btnViewPf = document.querySelector('#header .btn_more'); 
const btnGnb = document.querySelectorAll('.gnb_wrap a'); 
// 일종의 배열, node list
const sections = document.querySelectorAll('section');
const sectionPos = [0, ...[...sections].map(sec => sec.offsetTop)]

console.log(sections)
console.log(sectionPos) // 0,...[700,1400,2100]

btnViewPf.addEventListener('click', () => {
    //스크롤 이동 속성 : scrollTo(x, y)
    //스크롤링 될 위치 : '.portfolio'의 top 위치
   window.scrollTo({
    top: sections,
    behavior: "smooth"
   })
}) 

btnGnb.forEach((btn, i) => {   
    btn.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
            top: sectionPos[i],
            behavior: "smooth"
        })
    })
})

//*** gallery - masonry
const msnry = new Masonry('.gallery ul', {
    gutter: 20,
});