export function openNav() {
  document.getElementById('sideNav').style.width = '250px';

  document.getElementById('sideBarContainer').style.width = '100%';
  document.getElementById('sideBarContainer').style.backgroundColor =
    'var(--dark-theme-disabled-color)';

  document.getElementById('menu-button').style.color =
    'var(--dark-theme-base-color)';
}

export function closeNav() {
  document.getElementById('sideNav').style.width = '0';
  document.getElementById('sideBarContainer').style.width = '0';

  document.getElementById('menu-button').style.color =
    'var(--dark-theme-base-color)';
}
