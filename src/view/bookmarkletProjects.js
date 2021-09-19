import { generateProjectCard } from '../components/shared/project-card.componenet.js';
import { state } from '../data/data.js';

export function renderBookmarkletProjects() {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container-md';
  containerDiv.innerHTML = `<h3>Bookmarklet Projects</h3>`;

  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';

  containerDiv.appendChild(rowDiv);

  const projects = state.projectsGitData.bookmarklets;

  projects.forEach((project) => {
    const projectCard = generateProjectCard(project);

    rowDiv.appendChild(projectCard);
  });

  return containerDiv;
}
