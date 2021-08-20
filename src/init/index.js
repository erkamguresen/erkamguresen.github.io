import '../listeners/sidenavListeners.js';

import { getUserData, getUserRepositories } from './gitHubData.js';
import { state } from '../data/data.js';
import { loadRoot } from '../view/root-view.js';
import { renderFrontEndProjects } from '../view/frontEndProjects.js';

loadRoot();

const init = async () => {
  state.userGitData = await getUserData();
  document.getElementById('avatar').src = state.userGitData.avatar_url;

  const projects = await getUserRepositories(state.frontEndProjects);
  // state.projectsGitData.frontEndProjects = await getUserRepositories(
  //   state.frontEndProjects
  // );

  console.log(projects);
  const descriptions = renderFrontEndProjects(projects);
  const containerDiv = document.getElementById('Front-End');

  containerDiv.innerHTML = `<h3>Frontend Projects</h3>`;
  containerDiv.appendChild(descriptions);
  console.log(state.projectsGitData.frontEndProjects.length);
  console.log(state.projectsGitData.frontEndProjects);

  state.projectsGitData.backEndProjects = await getUserRepositories(
    state.backEndProjects
  );

  state.projectsGitData.bookmarklets = await getUserRepositories(
    state.bookmarklets
  );
};

init();
