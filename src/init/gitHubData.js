import * as settings from '../../settings.js';

const USER_URL = `${settings.BASE_GITHUB_URL}/users/${settings.USER_NAME}`;
const REPOSITORY_BASE_URL = `${settings.BASE_GITHUB_URL}/search/repositories?q=repo%3A${settings.USER_NAME}%2F`;

export async function getUserData() {
  let userData = {};
  try {
    const response = await fetch(USER_URL);
    userData = await response.json();
  } catch (error) {
    console.error(error);
  }

  return userData;
}

export async function getUserRepositories(repoArray) {
  let repositories = [];
  repoArray.forEach(async (repoName) => {
    try {
      const response = await fetch(`${REPOSITORY_BASE_URL}${repoName}`);
      const repositoryData = await response.json();
      repositories.push(repositoryData);
    } catch (error) {
      console.error(error);
    }
  });

  return repositories;
}
