import { HOSTNAME, NO_IMAGE_AVAILABLE } from "~/constants";

export default function editImagesToCurrentHost(carsList) {
  for (let car of carsList) {
    if (car.images.length > 2) {
      let newImagesArray = [];
      for (let image of car.images) {
        newImagesArray.push(`${HOSTNAME}${image}`);
      }
      car.images = newImagesArray;
    } else {
      car.images = [NO_IMAGE_AVAILABLE, NO_IMAGE_AVAILABLE, NO_IMAGE_AVAILABLE];
    }
  }
  return carsList;
}
