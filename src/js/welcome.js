import anime from 'animejs';

export class Sigil {
  constructor() {
    window.addEventListener('DOMContentLoaded', () => this.init());
    setInterval(() => {
      this.colourSwap();
    }, 8000);
    this.activeTheme = 0;
  }

  get settings() {
    return {
      themes: [
        { background: '#222', colour: '#eee' },
        { background: '#eee', colour: '#222' },
        { background: '#401a19', colour: '#ff3633' },
        { background: '#300169', colour: '#f7ff00' },
        { background: '#300023', colour: '#ff37de' },
        { background: '#21200f', colour: '#fff949' },
      ],
    };
  }

  initLayers() {
    const animateLayer = (layerSelector, scaleMin, scaleMax, duration) => {
      anime({
        targets: layerSelector + ' .el',
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

    animateLayer('.sigil-layer-1', 2, 4, 4000);
    animateLayer('.sigil-layer-2', 1.2, 2, 3000);
    animateLayer('.sigil-layer-3', 4, 6, 2000);
  }

  colourSwap() {
    this.activeTheme = Math.floor(Math.random() * this.settings.themes.length);

    anime({
      targets: '.el',
      opacity: [
        { value: 0.25, easing: 'linear' },
        { value: 1, easing: 'linear' },
      ],
    });

    anime({
      targets: 'body',
      backgroundColor: this.settings.themes[this.activeTheme].background,
      color: this.settings.themes[this.activeTheme].colour,
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  }

  init() {
    this.initLayers();
  }
}
