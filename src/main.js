import { Sigil } from './js/welcome';
import { handleHeaderScroll } from './js/header';
import { animOnScroll } from './js/animation';
import { toggleSidebar } from './js/sidebar';

handleHeaderScroll();
new Sigil();

window.addEventListener('scroll', animOnScroll);

document.getElementById('btn').addEventListener('click', toggleSidebar);

document.addEventListener('DOMContentLoaded', function () {
  const passCard = document.querySelector('.explore-item.pass');
  const gamesCard = document.querySelector('.explore-item.games');
  const rewardCard = document.querySelector('.explore-item.reward');

  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const box3 = document.querySelector('.box3');

  function setActive(card1, card2, card3) {
    passCard.classList.remove('active');
    gamesCard.classList.remove('active');
    rewardCard.classList.remove('active');

    card1.classList.add('active');
    card2.classList.remove('active');
    card3.classList.remove('active');
  }

  box1.addEventListener('mouseover', function () {
    setActive(passCard, gamesCard, rewardCard);
  });

  box2.addEventListener('mouseover', function () {
    setActive(gamesCard, passCard, rewardCard);
  });

  box3.addEventListener('mouseover', function () {
    setActive(rewardCard, passCard, gamesCard);
  });

  box1.addEventListener('click', function () {
    setActive(passCard, gamesCard, rewardCard);
  });

  box2.addEventListener('click', function () {
    setActive(gamesCard, passCard, rewardCard);
  });

  box3.addEventListener('click', function () {
    setActive(rewardCard, passCard, gamesCard);
  });
});
