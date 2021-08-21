import { state } from '../data/data.js';

export function renderFrontEndProjects() {
  const containerDiv = document.createElement('div');

  const projects = state.projectsGitData.frontEndProjects;

  projects.forEach((project) => {
    const description = document.createElement('p');
    description.innerText = project.items[0].description;
    containerDiv.appendChild(description);
  });

  return containerDiv;
}
