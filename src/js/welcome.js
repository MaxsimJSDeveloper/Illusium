import anime from 'animejs';

export class Sigil {
  constructor() {
    window.addEventListener('DOMContentLoaded', () => this.init());
  }

  initLayers(containerSelector) {
    const animateLayer = (layerSelector, scaleMin, scaleMax, duration) => {
      anime({
        targets: containerSelector + ' ' + layerSelector + ' .el',
        scale: () => anime.random(scaleMin, scaleMax),
        rotate: () => anime.random(0, 360),
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: duration,
        complete: animateLayer.bind(
          null,
          layerSelector,
          scaleMin,
          scaleMax,
          duration
        ),
      });
    };

    animateLayer('.sigil-layer-1', 1, 2, 4000);
    animateLayer('.sigil-layer-2', 0.6, 1, 3000);
    animateLayer('.sigil-layer-3', 2, 3, 2000);
  }

  attachAnimationContainer() {
    const container = document.querySelector('.for-animation');
    container.innerHTML = `
        <div class="sigil-layer-1">
          <div class="el"></div>
          <div class="el"></div>
        </div>
        <div class="sigil-layer-2">
          <div class="el"></div>
          <div class="el"></div>
          <div class="el"></div>
        </div>
        <div class="sigil-layer-3">
          <div class="el"></div>
          <div class="el"></div>
          <div class="el"></div>
        </div>
    `;
  }

  init() {
    this.attachAnimationContainer();
    this.initLayers('.for-animation');
  }
}
