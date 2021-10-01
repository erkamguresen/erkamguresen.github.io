import { state } from '../data/data.js';
import { closeNav, openNav } from '../view/sideNavMenu.js';

export function menuToggleHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  if (state.isMenuOpen && window.innerWidth < 768) {
    closeNav();
  } else {
    openNav();
  }
  state.isMenuOpen = !state.isMenuOpen;
}

export function menuCloseHandler(event) {
  // event.preventDefault();
  event.stopPropagation();

  closeNav();
  state.isMenuOpen = false;
}
