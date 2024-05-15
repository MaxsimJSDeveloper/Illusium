export function toggleSidebar() {
  const button = document.querySelector('.button');
  const sidebar = document.querySelector('.sidebar');
  const buttonW = document.querySelector('.burger-wrap');

  button.classList.toggle('active');

  const topBar = button.querySelector('.top');
  topBar.classList.toggle('active');

  const middleBar = button.querySelector('.middle');
  middleBar.classList.toggle('active');

  const bottomBar = button.querySelector('.bottom');
  bottomBar.classList.toggle('active');

  // Перевіряємо, чи модальне вікно зараз відкрите або закрите
  const isOpen = sidebar.style.display === 'block';

  // Якщо вікно відкрите, закриваємо його; якщо закрите, відкриваємо
  if (isOpen) {
    sidebar.style.display = 'none';
    // При закритті вікна змінюємо маргін кнопки бургера на 0
    buttonW.style.paddingLeft = '0';
  } else {
    // Спочатку встановлюємо display: block для sidebar, щоб отримати його ширину
    sidebar.style.display = 'block';
    // Отримуємо ширину модального вікна
    const sidebarWidth = sidebar.offsetWidth;
    console.log(sidebarWidth);
    // При відкритті вікна змінюємо маргін кнопки бургера на ширину модального вікна
    buttonW.style.paddingLeft = sidebarWidth + 'px';
  }
}
