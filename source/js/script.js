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
