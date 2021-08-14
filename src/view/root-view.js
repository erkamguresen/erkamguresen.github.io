import { createRootDiv } from '../components/rootComponent.js';

export function loadRoot() {
  const mainDiv = document.getElementById('main');
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }

  const rootDiv = createRootDiv();
  mainDiv.appendChild(rootDiv);

  const introContainerDiv = document.createElement('div');
  introContainerDiv.id = 'intro-container';
  introContainerDiv.style.backgroundImage =
    'url(public/images/web-4877960_1920.jpg)';
  introContainerDiv.style.backgroundSize = 'contain';

  //   introContainerDiv.innerHTML = ` <img src="../../public/images/web-4877960_1920.jpg" width="100%" height="150px"/>`;

  const introTextDiv = document.createElement('div');
  introTextDiv.id = 'intro-text';
  introTextDiv.style.backgroundColor = 'rgba(100, 100, 100, 0.7)';

  introTextDiv.style.color = '#fff';
  introTextDiv.innerHTML = `      <br><h2>Hi, I'm Erkam </h2> 
  <h3>I'm a full-stack web developer</h3><br><br><br>
  `;
  introContainerDiv.appendChild(introTextDiv);

  rootDiv.appendChild(introContainerDiv);
}
