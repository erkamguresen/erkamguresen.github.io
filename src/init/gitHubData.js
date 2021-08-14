import * as settings from '../../settings.js';

const USER_URL = `${settings.BASE_GITHUB_URL}/users/${settings.USER_NAME}`;

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
