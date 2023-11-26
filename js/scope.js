import {SCOPE_STEP, MAX_SCOPE, MIN_SCOPE, DEFOULT_SCOPE} from './subject.js';
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');
let currentScale = DEFOULT_SCOPE.VALUE;

const scaleSmaller = () => {
  if (currentScale > MIN_SCOPE.VALUE) {
    const smallerScale = currentScale - SCOPE_STEP.VALUE;
    previewImage.style.transform = `scale(${smallerScale})`;
    currentScale = smallerScale;
  }
  scaleValue.value = `${currentScale * 100}%`;
};

const scaleBigger = () => {
  if (currentScale < MAX_SCOPE.VALUE) {
    const biggerScale = currentScale + SCOPE_STEP.VALUE;
    previewImage.style.transform = `scale(${biggerScale})`;
    currentScale = biggerScale;
  }
  scaleValue.value = `${currentScale * 100}%`;
};

const onScaleSmallerClick = () => {
  scaleSmaller();
};

const onScaleBiggerClick = () => {
  scaleBigger();
};

const resetToDefault = () => {
  previewImage.style.transform = `scale(${DEFOULT_SCOPE.VALUE})`;
  currentScale = DEFOULT_SCOPE.VALUE;
};

scaleControlSmaller.addEventListener('click', onScaleSmallerClick);
scaleControlBigger.addEventListener('click', onScaleBiggerClick);

export {resetToDefault};
