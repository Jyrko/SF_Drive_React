import {HOSTNAME} from '~/constants';

export default async function getUserImageById(id) {
  console.log(`${HOSTNAME}/auth/user/get-image/${id}`);
  const result = await fetch(`${HOSTNAME}/auth/user/get-image/${id}`, {
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
    return "Error while getting user profile image path";
  }

  return result;
}
