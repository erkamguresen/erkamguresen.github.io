import { state } from '../data/data.js';
import { menuButtonChangeColor } from '../view/menuButtonColor.js';

export function handleIntersect(event) {
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio === 0) {
        state.menuButtonIntersect = true;
      } else {
        state.menuButtonIntersect = false;
      }

      menuButtonChangeColor();
    });
    observer.observe(document.getElementById('intro'));
  } else {
    //TODO: handle
    console.log('IntersectionObserver not supported');
  }
}
