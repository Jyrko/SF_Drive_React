import {ACCESS_TOKEN_KEY, HOSTNAME} from '~/constants';

export default async function getCarRandom12List() {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return [];

  const result = await fetch(`${HOSTNAME}/cars/random-12`, {
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

  if (Array.isArray(result)) {
    return result;
  }

  return [];
}
