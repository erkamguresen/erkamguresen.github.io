import '../listeners/sidenavListeners.js';

import { getUserData, getUserRepositories } from './gitHubData.js';
import { state } from '../data/data.js';
import { loadRoot } from '../view/root-view.js';
import { renderFrontEndProjects } from '../view/frontEndProjects.js';

loadRoot();

state.userGitData = await getUserData();
document.getElementById('avatar').src = state.userGitData.avatar_url;

state.projectsGitData.frontEndProjects = await getUserRepositories(
  state.frontEndProjects
);

const descriptions = renderFrontEndProjects();
const containerDiv = document.getElementById('Front-End');

containerDiv.innerHTML = `<h3>Frontend Projects</h3>`;
containerDiv.appendChild(descriptions);

state.projectsGitData.backEndProjects = await getUserRepositories(
  state.backEndProjects
);

state.projectsGitData.bookmarklets = await getUserRepositories(
  state.bookmarklets
);
