"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cb = function cb(el, inview) {
    if (inview) {
      var ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  var so = new ScrollObserver('.tween-animate-title', cb);

  var _inviewAnimation = function _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  var so2 = new ScrollObserver('.appear', _inviewAnimation);
  var header = document.querySelector('.header');

  var _navAnimation = function _navAnimation(el, inview) {
    if (inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  };

  var so3 = new ScrollObserver('.nav-trigger', _navAnimation, {
    once: false
  });
  new MobileMenu();
});
jQuery(function ($) {
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
document.addEventListener('DOMContentLoaded', function () {
  // タブに対してクリックイベントを適用
  var tabs = document.getElementsByClassName('tab');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  } // タブをクリックすると実行する関数


  function tabSwitch() {
    // タブのclassの値を変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active'); // コンテンツのclassの値を変更

    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    var arrayTabs = Array.prototype.slice.call(tabs);
    var index = arrayTabs.indexOf(this);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
  }

  ;
});
//# sourceMappingURL=main.js.map
