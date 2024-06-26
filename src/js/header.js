export function handleHeaderScroll() {
  let header = document.querySelector('.js-header');
  let logoWrap = document.querySelector('.logo-wrap');
  let name = document.querySelector('.name');
  let headerH = document.querySelector('.js-header').clientHeight;

  document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH) {
      header.classList.add('fixed');
      logoWrap.classList.add('min');
      name.classList.add('delete');
      document.body.style.paddingTop = headerH + 'px';
    } else {
      header.classList.remove('fixed');
      logoWrap.classList.remove('min');
      name.classList.remove('delete');
      document.body.removeAttribute('style');
    }
  };
}
