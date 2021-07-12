import { HOSTNAME, ACCESS_TOKEN_KEY } from '../constants';

export default async function authUser(email, password) {
  const result = await fetch(`${HOSTNAME}/auth/login`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
  .then(response => response.json())
  .then(data => {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
    console.log(data);
  })
  .catch(err => console.log(err));

  return result;
}
