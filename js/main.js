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