export function openNav() {
  document.getElementById('sideNav').style.width = '250px';

  document.getElementById('sideBarContainer').style.width = '100%';
  document.getElementById('sideBarContainer').style.backgroundColor =
    'rgba(0,0,0,0.4)';

  document.getElementById('menu-button').style.color = '#818181';
  //   document.getElementById('menu-button-container').style.left = '205px';
}

export function closeNav() {
  document.getElementById('sideNav').style.width = '0';
  document.getElementById('sideBarContainer').style.width = '0';
  document.getElementById('sideBarContainer').style.backgroundColor =
    'rgba(0,0,0,0.4)';

  document.getElementById('menu-button').style.color = '#000';
  //   document.getElementById('menu-button-container').style.left = '10px';
}
