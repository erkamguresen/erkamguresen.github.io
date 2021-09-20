import { handleIntersect } from '../handlers/intersectHandlers.js';

export function createMenuButtonObserver(element) {
  let observer;

  let options = {
    root: document.getElementById('intro'),
    rootMargin: '0px',
    threshold: 1.0,
  };

  observer = new IntersectionObserver(handleIntersect, options);

  observer.observe(element);
  console.log('observer:', observer);
}
