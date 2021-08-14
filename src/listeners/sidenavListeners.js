import {
  menuCloseHandler,
  menuToggleHandler,
} from '../handlers/menuHandlers.js';

document
  .getElementById('menu-button')
  .addEventListener('click', menuToggleHandler);

document
  .getElementById('sideBarContainer')
  .addEventListener('click', menuCloseHandler);
