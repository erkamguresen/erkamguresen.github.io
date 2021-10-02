import '../listeners/sidenavListeners.js';
import '../listeners/menuButtonListener.js';

import { getUserData, getUserRepositories } from './gitHubData.js';
import { state, data } from '../data/data.js';

import { renderFrontEndProjects } from '../view/frontEndProjects.js';
import { renderBackEndProjects } from '../view/backEndProjects.js';
import { renderBookmarkletProjects } from '../view/bookmarkletProjects.js';

state.userGitData = await getUserData();
document.getElementById('avatar').src = state.userGitData.avatar_url;

state.projectsGitData.bookmarklets = data.bookmarklets;
state.projectsGitData.frontEndProjects = data.frontEndProjects;
state.projectsGitData.backEndProjects = data.backEndProjects;

let areResultsComplete = true;

const resultBookmarklets = await getUserRepositories(state.bookmarklets);

for (let i = 0; i < resultBookmarklets.length; i++) {
  if (
    !resultBookmarklets[i].incomplete_results === false ||
    resultBookmarklets[i].incomplete_results === undefined
  ) {
    areResultsComplete = false;
  }
}

if (areResultsComplete) {
  state.projectsGitData.bookmarklets = resultBookmarklets;
}

const bookmarkletProjects = renderBookmarkletProjects();

const bookmarkletContainer = document.getElementById('Bookmarklets');
bookmarkletContainer.appendChild(bookmarkletProjects);

areResultsComplete = true;

const resultFrontEnd = await getUserRepositories(state.frontEndProjects);

for (let i = 0; i < resultFrontEnd.length; i++) {
  if (
    !resultFrontEnd[i].incomplete_results === false ||
    resultFrontEnd[i].incomplete_results === undefined
  ) {
    areResultsComplete = false;
  }
}
if (areResultsComplete) {
  state.projectsGitData.frontEndProjects = resultFrontEnd;
}

const frontEndProjects = renderFrontEndProjects();

const frontEndContainer = document.getElementById('Front-End');
frontEndContainer.appendChild(frontEndProjects);

areResultsComplete = true;

const resultBackend = await getUserRepositories(state.backEndProjects);

for (let i = 0; i < resultBackend.length; i++) {
  if (
    !resultBackend[i].incomplete_results === false ||
    resultBackend[i].incomplete_results === undefined
  ) {
    areResultsComplete = false;
  }
}
if (areResultsComplete) {
  state.projectsGitData.backEndProjects = resultBackend;
}

const backEndProjects = renderBackEndProjects();

const backEndContainer = document.getElementById('Back-End');
backEndContainer.appendChild(backEndProjects);

// console.log('state', state);
