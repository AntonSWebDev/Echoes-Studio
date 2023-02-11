import $ from 'jquery';
import Swiper from 'swiper';
// import jBox from 'jbox';
import { Fancybox } from "@fancyapps/ui";
import * as isWebp from './modules/isWebp.js';
import * as ibg from './modules/ibg.js';
// import * as anchors from './modules/anchors.js';
// import * as useDynamicAdapt from './modules/dynamicAdapt.js';
// import * as spoilers from './modules/spoilers.js';

isWebp.isWebp(); // Проверка поддержки webp и добавление класса _webp или _no-webp для HTML
ibg.ibg(); // Фоновое изображение
// anchors.anchors(); // Плавный скролл
// useDynamicAdapt.useDynamicAdapt(); // Динамический адаптив
// spoilers.spoilers(); // Спойлеры

// Menu

const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-nav');
const overlay = document.querySelectorAll('.overlay');
const links = document.querySelectorAll('.link-nav');

menuBtn.addEventListener('click', function () {
 body.classList.toggle('lock');
 menu.classList.toggle('active');
 menuBtn.classList.toggle('active');
 overlay.forEach(function (i) {
  i.classList.toggle('active');
 });
});

overlay.forEach(function (i) {
 i.addEventListener('click', function() {
  overlay.forEach(function (i) {
   i.classList.remove('active');
  });
  body.classList.remove('lock');
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
 });
});

links.forEach(function (i) {
 i.addEventListener('click', function (e) {
  body.classList.remove('lock');
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  overlay.forEach(function (i) {
   i.classList.remove('active');
  });
 });
});


const swiper = new Swiper('.slider-createurs', {
  allowTouchMove: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 4,
});

// WORKS FILTER

// const mixerContainer = document.querySelector('.works__top');
// const mixer = mixitup('.works__items');
// const mixBtns = document.querySelectorAll('.works__filter');
// const mixItems = document.querySelectorAll('.works__item');
// const allBtn = document.querySelector('.works__filter--all');

// mixBtns.forEach(function (i) {
//   i.addEventListener('click', function () {
//     mixerContainer.classList.add('active');
//     mixItems.forEach(function (i) {
//       i.classList.add('active');
//     });
//   });
// });

// allBtn.addEventListener('click', function () {
//   mixerContainer.classList.remove('active');
//   mixItems.forEach(function (i) {
//     i.classList.remove('active');
//   });
// });

// MODALS

// const allModals = document.querySelectorAll('[data-modal]');
// const modalButtons = document.querySelectorAll('[data-modal-button]');
// const modalCloseBtn = document.querySelectorAll('[data-modal-close]');

// modalButtons.forEach(function (i) {
//   i.addEventListener("click", function (e) {
//     e.preventDefault();
//     body.classList.add('lock')
//     const modalId = this.dataset.modalButton;
//     const modal = document.querySelector('#' + modalId);
//     modal.classList.remove('visibility-hidden');
//     overlay.classList.add('active');
//     const modalWindow = modal.querySelector('.modal__window');
//     modalWindow.addEventListener("click", function (e) {
//       e.stopPropagation();
//     });
//   });
// });

// modalCloseBtn.forEach(function (i) {
//   i.addEventListener("click", function (e) {
//     body.classList.remove('lock')
//     e.preventDefault();
//     const modal = this.closest('[data-modal]');
//     modal.classList.add('visibility-hidden');
//     overlay.classList.remove('active');
//   });
// });

// overlay.addEventListener("click", function () {
//   body.classList.remove('lock')
//   allModals.forEach(function (i) {
//     i.classList.add('visibility-hidden');
//   })
// });