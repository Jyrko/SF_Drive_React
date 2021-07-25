import {HOSTNAME} from '~/constants';

export default async function getUserBasicInfoById(id) {
  const result = await fetch(`${HOSTNAME}/auth/user/basic-info/${id}`, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    },
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));

  if (!result) {
    return false;
  }

  return result;
}
