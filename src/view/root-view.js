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
    'url(public/images/fingers-5946228_1920.jpg)';
  introContainerDiv.style.backgroundSize = 'cover';
  introContainerDiv.style.backgroundColor =
    'var(--light-theme-secondary-color)';
  introContainerDiv.style.backgroundBlendMode = 'soft-light';
  introContainerDiv.style.color = 'var(--dark-theme-text-color)';

  const introTextDiv = document.createElement('div');
  introTextDiv.id = 'intro-text';
  introTextDiv.innerHTML = `      <h2>Simple web site</h2>
  <p>
    Click on the element below to open the side navigation menu, and push
    this content to the right. Notice that we add a black see-through
    background-color to body when the sidenav is opened.
  </p>`;
  introContainerDiv.appendChild(introTextDiv);

  rootDiv.appendChild(introContainerDiv);
}
