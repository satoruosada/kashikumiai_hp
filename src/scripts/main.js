document.addEventListener('DOMContentLoaded' , function(){
  const cb = function (el, inview) {
    if(inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
}

const so = new ScrollObserver('.tween-animate-title', cb);


const _inviewAnimation = function(el, inview){
  if(inview){
    el.classList.add('inview');
  }else{
    el.classList.remove('inview');
  }
}
const so2 = new ScrollObserver('.appear', _inviewAnimation);




const header = document.querySelector('.header');

const _navAnimation = function(el, inview){
  if(inview) {
    header.classList.remove('triggered');
} else {
    header.classList.add('triggered');
}
}

const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});

new MobileMenu();
});


jQuery(function($){

  var sideBar = $('.footer__scroll');
  sideBar.hide();
  
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        sideBar.fadeIn();
      } else {
        sideBar.fadeOut();
      }
  });
});


document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName('tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  }

  // タブをクリックすると実行する関数
  function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
  };
});

