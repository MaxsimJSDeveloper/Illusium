import { Sigil } from './js/welcome';
import { handleHeaderScroll } from './js/header';
import { animOnScroll } from './js/animation';

handleHeaderScroll();
new Sigil();

window.addEventListener('scroll', animOnScroll);
