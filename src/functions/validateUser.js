import {ACCESS_TOKEN_KEY, HOSTNAME, POST_HEADERS, USER_FULLNAME_KEY, USER_ID_KEY} from '~/constants';

export default async function validateUser() {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  console.log(accessToken);
  if (!accessToken) return false;

  const result = await fetch(`${HOSTNAME}/auth/user`, {
    method: 'POST',
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
    },
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
  sessionStorage.setItem(USER_ID_KEY, result._id);
  return true;
}
