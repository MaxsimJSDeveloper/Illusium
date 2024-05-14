import { Sigil } from './js/welcome';
import { handleHeaderScroll } from './js/header';
import { animOnScroll } from './js/animation';

handleHeaderScroll();
new Sigil();

window.addEventListener('scroll', animOnScroll);

function toggleSidebar() {
  var button = document.querySelector('.button');
  var sidebar = document.querySelector('.sidebar');
  const buttonW = document.querySelector('.burger-wrap');

  button.classList.toggle('active');

  var topBar = button.querySelector('.top');
  topBar.classList.toggle('active');

  var middleBar = button.querySelector('.middle');
  middleBar.classList.toggle('active');

  var bottomBar = button.querySelector('.bottom');
  bottomBar.classList.toggle('active');

  // Перевіряємо, чи модальне вікно зараз відкрите або закрите
  var isOpen = sidebar.style.display === 'block';

  // Якщо вікно відкрите, закриваємо його; якщо закрите, відкриваємо
  if (isOpen) {
    sidebar.style.display = 'none';
    // При закритті вікна змінюємо маргін кнопки бургера на 0
    buttonW.style.paddingLeft = '0';
  } else {
    // Спочатку встановлюємо display: block для sidebar, щоб отримати його ширину
    sidebar.style.display = 'block';
    // Отримуємо ширину модального вікна
    let sidebarWidth = sidebar.offsetWidth;
    console.log(sidebarWidth);
    // При відкритті вікна змінюємо маргін кнопки бургера на ширину модального вікна
    buttonW.style.paddingLeft = sidebarWidth + 'px';
  }
}

// Додаємо обробник подій кліку на кнопку бургера
document.getElementById('btn').addEventListener('click', toggleSidebar);
