import {HOSTNAME} from "~/constants"

export default function editImagePathToCurrentHost(url) {
  return `${HOSTNAME}${url}`;
}
