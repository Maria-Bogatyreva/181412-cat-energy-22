const pageHeader = document.querySelector('.page-header');
const navToggle = pageHeader.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--menu-no-js');
pageHeader.classList.add('page-header--menu-closed');

navToggle.addEventListener('click', function() {
    if (pageHeader.classList.contains('page-header--menu-closed')) {
    pageHeader.classList.remove('page-header--menu-closed');
    pageHeader.classList.add('page-header--menu-opened');
  } else {
    pageHeader.classList.add('page-header--menu-closed');
    pageHeader.classList.remove('page-header--menu-opened');
  }
});

/*Типа, слайдер*/
const btnBefore = document.querySelector('.slider__button--before');
const btnAfter = document.querySelector('.slider__button--after');

const imgBefore = document.querySelector('.slider__img--before');
const imgAfter = document.querySelector('.slider__img--after');

btnAfter.addEventListener('click', function () {
  imgBefore.classList.add('slider__img--hide');
  imgAfter.classList.remove('slider__img--hide');
});

btnBefore.addEventListener('click', function () {
  imgAfter.classList.add('slider__img--hide');
  imgBefore.classList.remove('slider__img--hide');
});
