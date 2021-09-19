import '../listeners/sidenavListeners.js';

import { getUserData, getUserRepositories } from './gitHubData.js';
import { state } from '../data/data.js';
import { loadRoot } from '../view/root-view.js';
import { renderFrontEndProjects } from '../view/frontEndProjects.js';
import { renderBackEndProjects } from '../view/backEndProjects.js';
import { renderBookmarkletProjects } from '../view/bookmarkletProjects.js';

loadRoot();

state.userGitData = await getUserData();
document.getElementById('avatar').src = state.userGitData.avatar_url;

// state.projectsGitData.frontEndProjects = await getUserRepositories(
//   state.frontEndProjects
// );

const frontEndProjects = renderFrontEndProjects();

const frontEndContainer = document.getElementById('Front-End');
frontEndContainer.appendChild(frontEndProjects);

// state.projectsGitData.backEndProjects = await getUserRepositories(
//   state.backEndProjects
// );

const backEndProjects = renderBackEndProjects();

const backEndContainer = document.getElementById('Back-End');
backEndContainer.appendChild(backEndProjects);

// state.projectsGitData.bookmarklets = await getUserRepositories(
//   state.bookmarklets
// );

const bookmarkletProjects = renderBookmarkletProjects();

const bookmarkletContainer = document.getElementById('Bookmarklets');
bookmarkletContainer.appendChild(bookmarkletProjects);

console.log(state);
