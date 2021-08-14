import '../listeners/sidenavListeners.js';

import { getUserData } from './gitHubData.js';
import { state } from '../data/data.js';
import { loadRoot } from '../view/root-view.js';

loadRoot();

state.userGitData = await getUserData();

document.getElementById('avatar').src = state.userGitData.avatar_url;

console.log(state);
