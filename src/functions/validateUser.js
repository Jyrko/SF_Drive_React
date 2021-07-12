import {ACCESS_TOKEN_KEY, HOSTNAME, POST_HEADERS, USER_FULLNAME_KEY} from '~/constants';

export default async function validateUser() {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return false;

  const result = await fetch(`${HOSTNAME}/auth/user`, {
    method: 'POST',
    headers: POST_HEADERS,
    body: JSON.stringify({
      "accessToken": accessToken
    })
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));

  console.log(result);
  if (result.message !== "success") return false;

  sessionStorage.setItem(USER_FULLNAME_KEY, result.name);
  return true;
}
