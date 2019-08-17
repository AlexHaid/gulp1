let menu = document.querySelector('.main-menu');
const overlay = document.querySelector('.overlay');
const menuLayer = document.querySelector('.menu-layer');
let logo = document.querySelector('.header__logo');
let menuButton = document.querySelector('.header__overlay-button');
let body = document.querySelector('body');
let search = document.querySelector('.header__search');
let mainItems = document.querySelectorAll('.main-menu__item');
let subMenu = document.querySelector('.submenu');
const arrowNext = document.createElement('div');
// const arrowPrev = document.createElement('span').classList.add('arrow-prev');
const resolutions = {
  desktop: 1280,
  tablet: 768,
  phone: 480
};

//check here if we can use event listeners or attach events
let addEvent = (object, type, callback) => {
  if (object == null || typeof(object) == 'undefined') return;
  if (object.addEventListener) {
      object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
      object.attachEvent("on" + type, callback);
  } else {
      object["on"+type] = callback;
  }
};
// (function () {
//   for (let mainItem of mainItems) {
//     if(mainItem.contains(subMenu)) {
//       console.log(this);
//     }
//   }
// })();
// for(let mainItem in mainItems) {
//   if (mainItems[mainItem].lastElementChild == subMenu) {
//     console.log(typeof(arrowNext));
//     mainItems[mainItem].appendChild(arrowNext);
//     arrowNext.classList.add('arrow-next');
//   }
//   console.log(mainItems[mainItem]);
// }
let mobileMenu = () => {
  let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

  if (width < resolutions.desktop) {
    menuLayer.appendChild(menu);
    // overlay.classList.add('active');
    // menuLayer.classList.add('active');

  } else {
    // overlay.classList.remove('active');
    // menuLayer.classList.remove('active');
    logo.after(menu);
  }
}

let openMenu = () => {
  overlay.classList.toggle('active');
  menuLayer.classList.toggle('active');
  body.classList.toggle('fixed');
}

addEvent(window, "load", mobileMenu);
addEvent(window, "resize", mobileMenu);
addEvent(menuButton, 'click', openMenu);

import {tns} from './tiny-slider.js';

var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true
});

