import { state } from '../data/data.js';
import { menuButtonChangeColor } from './menuButtonColor.js';

const menuButton = document.getElementById('menu-button');

export function openNav() {
  state.sideNavOpen = true;

  document.getElementById('sideNav').style.width = '250px';

  document.getElementById('sideBarContainer').style.width = '100%';
  document.getElementById('sideBarContainer').style.backgroundColor =
    'var(--dark-theme-disabled-color)';

  menuButtonChangeColor();
}

export function closeNav() {
  state.sideNavOpen = false;

  document.getElementById('sideNav').style.width = '0';
  document.getElementById('sideBarContainer').style.width = '0';

  menuButtonChangeColor();
}
