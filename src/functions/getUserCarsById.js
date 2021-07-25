import {HOSTNAME, ACCESS_TOKEN_KEY} from '~/constants';

export default async function getUserBasicInfoById(id) {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return [];

  const result = await fetch(`${HOSTNAME}/cars/by-user-id/${id}`, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
    },
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));

  if (!result) {
    return [];
  }

  return result;
}
