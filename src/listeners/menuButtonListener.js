import { createMenuButtonObserver } from '../observers/menuButtonObserver.js';

// Set things up
window.addEventListener(
  'load',
  (event) => {
    const button = document.getElementById('menu-button');
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio === 0) {
          button.classList.add('text-dark');
        } else {
          button.classList.remove('text-dark');
        }
      });
      observer.observe(document.getElementById('intro'));
    } else {
      //TODO: handle
      console.log('IntersectionObserver not supported');
    }
  },
  false
);
