export function openNav() {
  //TODO embed this to CSS classes and only change the class here
  document.getElementById('sideNav').style.width = '250px';

  document.getElementById('sideBarContainer').style.width = '100%';
  document.getElementById('sideBarContainer').style.backgroundColor =
    'var(--dark-theme-disabled-color)';

  document.getElementById('menu-button').style.color =
    'var(--dark-theme-base-color)';
}

export function closeNav() {
  //TODO embed this to CSS classes and only change the class here
  document.getElementById('sideNav').style.width = '0';
  document.getElementById('sideBarContainer').style.width = '0';

  document.getElementById('menu-button').style.color =
    'var(--dark-theme-call-to-action-color)';
}
