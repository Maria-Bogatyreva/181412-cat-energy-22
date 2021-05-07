const pageHeader = document.querySelector('.page-header');
const navToggle = pageHeader.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header__menu-opened');
pageHeader.classList.add('page-header__menu-closed');

navToggle.addEventListener('click', function() {
    if (pageHeader.classList.contains('page-header__menu-closed')) {
    pageHeader.classList.remove('page-header__menu-closed');
    pageHeader.classList.add('page-header__menu-opened');
  } else {
    pageHeader.classList.add('page-header__menu-closed');
    pageHeader.classList.remove('page-header__menu-opened');
  }
});
