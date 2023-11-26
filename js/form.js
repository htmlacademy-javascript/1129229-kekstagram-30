import {resetData, isValidation} from './form-valid.js';
import {resetFilters, renderFilters} from './form-silder.js';
import {DEFOULT_SCOPE} from './subject.js';
import {resetToDefault} from './scope.js';
const form = document.querySelector('.img-upload__form');
const formInput = form.querySelector('.img-upload__input');
const formOverlay = form.querySelector('.img-upload__overlay');
const formCancel = form.querySelector('.img-upload__cancel');
const formPreview = form.querySelector('.img-upload__preview img');
const previewEffects = document.querySelectorAll('.effects__preview');

const showEditModal = () => {
  if (formInput.files.length !== 0) {
    formOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEditModalEscKeydown);
  }
};

const renderModalPhoto = () => {
  const fileImage = formInput.files[0];
  formPreview.src = URL.createObjectURL(fileImage);
  formPreview.style.transform = `scale(${DEFOULT_SCOPE.VALUE})`;
};

const renderMiniPreviews = () => {
  const fileImage = formInput.files[0];
  const url = URL.createObjectURL(fileImage);
  previewEffects.forEach((previewMini) => {
    previewMini.style.backgroundImage = `url(${url})`;
  });
};

const onFileInputChange = () => {
  showEditModal();
  renderModalPhoto();
  renderMiniPreviews();
  resetToDefault();
  resetFilters();
  renderFilters();
};

const hideEditModal = () => {
  formOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const closeEditModal = () => {
  hideEditModal();
  removeEscListener();
  formInput.value = '';
  resetData();
};

const onCloseEditModalClick = () => {
  closeEditModal();
};

formCancel.addEventListener('click', () => onCloseEditModalClick());

function onEditModalEscKeydown(evt) {
  if (!evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeEditModal();
    }
  }
}

function removeEscListener() {
  document.removeEventListener('keydown', onEditModalEscKeydown);
}

formInput.addEventListener('change', () => onFileInputChange());
form.addEventListener('submit', (evt) => {
  if (isValidation()) {
    //валидно
  } else {
    evt.preventDefault();
  }
});
