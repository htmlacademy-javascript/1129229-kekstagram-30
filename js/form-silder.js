import {Filters, FilterEffects} from './subject.js';
const slider = document.querySelector('.effect-level__slider');
const sliderEffectsValue = document.querySelector('.effect-level__value');
const sliderEffectsList = document.querySelector('.effects__list');
const sliderPreviewImage = document.querySelector('.img-upload__preview img');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const isNoneEffect = (currentEffect) => currentEffect.effect === 'none';

const resetFilters = () => {
  slider.classList.add('hidden');
  sliderPreviewImage.style.filter = 'none';
  sliderEffectsValue.checked = true;
};

const sliderUpdate = ({effect, unit}) => {
  slider.noUiSlider.on('update', () => {
    sliderEffectsValue.value = slider.noUiSlider.get();
    sliderPreviewImage.style.filter = `${effect}(${sliderEffectsValue.value}${unit})`;
  });
};

const sliderUpdateOptions = ({min, max, step}) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: 100,
    step: step,
    connect: 'lower',
  });

};
const showEffect = ({effect, effectValue, unit}) => {
  sliderEffectsValue.value = slider.noUiSlider.get();
  sliderPreviewImage.style.filter = `${effect}(${effectValue}${unit})`;
};

const onEffectChange = (evt) => {
  const currentEffect = Filters[FilterEffects[evt.target.value]];
  if (isNoneEffect(currentEffect)) {
    sliderPreviewImage.style.filter = 'none';
    slider.classList.add('hidden');
  } else {
    slider.classList.remove('hidden');
    sliderUpdateOptions(currentEffect);
    showEffect(currentEffect);
    sliderUpdate(currentEffect);
  }
};
const renderFilters = () => {
  sliderEffectsList.addEventListener('change', onEffectChange);
};

export {resetFilters, renderFilters};
