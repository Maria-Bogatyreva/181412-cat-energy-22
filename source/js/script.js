const pageHeader = document.querySelector('.page-header');
const navToggle = pageHeader.querySelector('.page-header__toggle');

navToggle.addEventListener('click', function() {
    if (pageHeader.classList.contains('page-header__menu-closed')) {
    pageHeader.classList.remove('page-header__menu-closed');
    pageHeader.classList.add('page-header__menu-opened');
  } else {
    pageHeader.classList.add('page-header__menu-closed');
    pageHeader.classList.remove('page-header__menu-opened');
  }
});
