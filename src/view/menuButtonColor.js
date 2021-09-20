import { state } from '../data/data.js';

export function menuButtonChangeColor() {
  const menuButton = document.getElementById('menu-button');
  if (state.sideNavOpen) {
    menuButton.style.color = 'var(--dark-theme-text-color)';
  } else if (state.menuButtonIntersect === true) {
    menuButton.style.color = 'var(--light-theme-base-color)';
  } else {
    menuButton.style.color = 'var(--dark-theme-text-color)';
  }
}
