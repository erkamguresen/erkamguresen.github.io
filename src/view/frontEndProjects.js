import { state } from '../data/data.js';

export function renderFrontEndProjects(projects) {
  const containerDiv = document.createElement('div');

  console.log(projects);
  // const projects = state.projectsGitData.frontEndProjects;

  projects.forEach((project) => {
    const description = document.createElement('p');
    description.innerText = project.items[0].description;
    console.log(description);
    containerDiv.appendChild(description);
  });

  console.log(containerDiv);
  return containerDiv;
}
