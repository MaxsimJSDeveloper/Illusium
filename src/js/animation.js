export function animOnScroll() {
  const animItems = document.querySelectorAll('.anime-items');

  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      window.scrollY > animItemOffset - animItemPoint &&
      window.scrollY < animItemOffset + animItemHeight
    ) {
      animItem.classList.add('active');
    } else {
      if (!animItem.classList.contains('.anim-no-hide')) {
        animItem.classList.remove('active');
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}

window.addEventListener('scroll', animOnScroll);
