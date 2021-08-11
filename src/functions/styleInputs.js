export function setInvalidStyleInput(target) {
  target.style.opacity = '1';
  target.style.border = '2px solid red';
  return target;
}

export function setValidStyleInput(target) {
  target.style.border = '2px solid green';
  return target;
}
