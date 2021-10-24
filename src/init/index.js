import '../listeners/sidenavListeners.js';
import '../listeners/menuButtonListener.js';

import { getUserData, getUserRepositories } from './gitHubData.js';
import { state } from '../data/data.js';
import { data } from '../data/storedData.js';

import { renderFrontEndProjects } from '../view/frontEndProjects.js';
import { renderBackEndProjects } from '../view/backEndProjects.js';
import { renderBookmarkletProjects } from '../view/bookmarkletProjects.js';

state.userGitData = await getUserData();
document.getElementById('avatar').src = state.userGitData.avatar_url;

const resultBookmarklets = await getUserRepositories(state.bookmarklets);

let areResultsComplete = true;

for (let i = 0; i < resultBookmarklets.length; i++) {
  if (
    !resultBookmarklets[i].incomplete_results === false ||
    resultBookmarklets[i].incomplete_results === undefined
  ) {
    areResultsComplete = false;
    break;
  }
}

if (areResultsComplete) {
  state.projectsGitData.bookmarklets = resultBookmarklets;
} else {
  state.projectsGitData.bookmarklets = data.bookmarklets;
}

const bookmarkletProjects = renderBookmarkletProjects();

const bookmarkletContainer = document.getElementById('Bookmarklets');
bookmarkletContainer.appendChild(bookmarkletProjects);

const resultFrontEnd = await getUserRepositories(state.frontEndProjects);

areResultsComplete = true;

for (let i = 0; i < resultFrontEnd.length; i++) {
  if (
    !resultFrontEnd[i].incomplete_results === false ||
    resultFrontEnd[i].incomplete_results === undefined
  ) {
    areResultsComplete = false;
    break;
  }
}

if (areResultsComplete) {
  state.projectsGitData.bookmarklets = resultFrontEnd;
} else {
  state.projectsGitData.frontEndProjects = data.frontEndProjects;
}

const frontEndProjects = renderFrontEndProjects();

const frontEndContainer = document.getElementById('Front-End');
frontEndContainer.appendChild(frontEndProjects);

const resultBackend = await getUserRepositories(state.backEndProjects);

areResultsComplete = true;

for (let i = 0; i < resultBackend.length; i++) {
  if (
    !resultBackend[i].incomplete_results === false ||
    resultBackend[i].incomplete_results === undefined
  ) {
    areResultsComplete = false;
    break;
  }
}

if (areResultsComplete) {
  state.projectsGitData.backEndProjects = resultBackend;
} else {
  state.projectsGitData.backEndProjects = data.backEndProjects;
}

const backEndProjects = renderBackEndProjects();

const backEndContainer = document.getElementById('Back-End');
backEndContainer.appendChild(backEndProjects);

// console.log('state', state);
