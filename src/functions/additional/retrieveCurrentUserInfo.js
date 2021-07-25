import {ACCESS_TOKEN_KEY, HOSTNAME} from "~/constants";

export default async function retrieveCurrentUserInfo() {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return console.warn("Access token does not exist");

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
  console.log(result)

  if (result) {
    return result;
  }
  return "Server error on getting the user info";
}
