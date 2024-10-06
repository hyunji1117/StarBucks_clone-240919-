//SEARCH
const searchEl = document.querySelector('.search'); //class가 search인 요소를 찾아서 searchEl 변수에 할당하기
const searchInputEl = searchEl.querySelector('input'); //앞서 찾아둔 searchEl변수에서 input을 찾기

searchEl.addEventListener('click', function () { //searchInputEl이 클릭되면 익명함수 로직이 실행된다. 
  searchInputEl.focus(); //실제로 foucus를 강제 적용하기.
});

searchInputEl.addEventListener('focus', function () { //만약에 searchInput에 foucus(마우스 클릭)가 되면 'focused'class가 추가되어 실행된다. = 핸들러
  searchEl.classList.add('focused'); //class정보를 가지고 있는 객체에 어떤 class내용을 추가하겠다. 
  searchInputEl.setAttribute('placeholder', '통합검색'); //searchInputEl변수에 Attribute(html)을 지정한다. 
});

searchInputEl.addEventListener('blur', function () { //blur: focus가 해제 되었을 때를 의미한다.
  searchEl.classList.remove('focused'); //searchInputEl에 focus가 해제되면 새로 추가한 class focused를 삭제한다.  
  searchInputEl.setAttribute('placeholder', ' ');
});

//BADGE
const badgeEl = document.querySelector('header .badges')

//window = 브라우져 창
/*
window.addEventListener('scroll', function () {
  console.log('scroll!'); 스크롤할 때 많은 scroll함수가 실행된다. > 导致화면 버벅임
});
*/

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY); //화면을 스크롤할 때 화면의 위치가 숫자로 표시된다.
  if(window.scrollY > 500) { //scroll Y값(세로값)을 통해 화면이 위에서부터 몇 픽셀 지점에 위치하고 있는지를 파악 가능함.
    //만약 픽셀 지점이 500보다 커지면 벳지를 숨겨준다. (css로 처리)
    // badgeEl.style.display = 'none' (기능적으로는 가능)
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, { //객체 데이터 추가로 0.6초 동안 opacity(투명도)가 점점 연해지는 기능. 시각적 뿐만 아니라 기능적으로도 사라지게 만들어야 함.
      opacity: 0,
      display: 'none'
    });
  } else {
    //500보다 작으면 벳지를 다시 보여준다.
    // badgeEl.style.display = 'block' (기능적으로는 가능)
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block' //block = 해제
    });
  }
}, 300)); //0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지하는 용도로 로데시에서 제공하는 throttle 기능을 도입한다.
//scroll 이벤트 통해 작업할 때 많이 사용된다. (연결되어 있는 익명함수가 많은 횟수로 실행되기 때문.)


//FADE-IN
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) { //html에서 찾은 fade-in의 개수만큼 함수 실행 (통상적으로 단수형태로 작성함, 반복 횟수)...1.4, 2.1, 2.8
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index * 1) * .7, //첫번쨰 inde값 * 0.7 = 0 (지연시간X), 두번째 index값 * 0.7 = 0.7
    opacity: 1 //css에서 작성한 opacity: 0이 1이 되도록 하는 것.
  }); 
}); 


//NOTICE (SWIPER.JS)
new Swiper('.notice-line .swiper-container', {  //new Swiper(인수(선택자), 옵션)
  direction: 'vertical',
  autoplay: true, //자동재생
  loop: true //반복해줌
});

new Swiper('.promotion .swiper-container', {
  // direction: horizontal; 기본값으로 작성하지 않아도 됨. 
  slidesPerView: 3, //한번에 세개 슬라이드를 보여줌. 
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드를 가운데 보이게 하기.
  loop: true,
  // autoplay: {
  //   delay: 5000 //5초 마다 슬라이드 전환
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //선택자에 맞는 요소를 찾아 페이지 번호 사용하도록 동작한다. 
    clickable: true //페이지 버튼을 실제로 눌러서 사용 가능여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전 슬라이드를 볼 수 있는 기능
    nextEl: '.promotion .swiper-next' //이후 슬라이드를 볼 수 있는 기능
  }
}); 