import {resetData, isValidation} from './form-valid.js';
const form = document.querySelector('.img-upload__form');
const formInput = form.querySelector('.img-upload__input');
const formOverlay = form.querySelector('.img-upload__overlay');
const formCancel = form.querySelector('.img-upload__cancel');

const showEditModal = () => {
  if (formInput.files.length !== 0) {
    formOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onEditModalEscKeydown);
  }
};

const onFileInputChange = () => {
  showEditModal();
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
    //форма валидна
  } else {
    evt.preventDefault();
  }
});
