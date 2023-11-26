import {hideButton, showButton, showModal, hideModal, removeComments} from './modal-switch.js';
import {createComment, commentsBlock, commentsFragment, renderData, modalPicture, modalShownCommentsCount, commentsCount} from './modal.js';
import {COMMENTS_TO_SHOW} from './subject.js';
const cancelModal = modalPicture.querySelector('.big-picture__cancel');
const commentsLoader = modalPicture.querySelector('.social__comments-loader');

let showCommentsCount = 0;
let showComments = [];

const openModalPicture = () => {
  showModal(modalPicture);
  document.addEventListener('keydown', onModalEscKeydown);
};

const resetCommentsCount = () => {
  showCommentsCount = 0;
  showComments.length = 0;
};

const closeModalPicture = () => {
  hideModal(modalPicture);
  removeEscListener();
  resetCommentsCount();
};

const renderComments = () => {
  showComments.splice(0, COMMENTS_TO_SHOW).forEach((comment) => {
    createComment(comment);
    commentsFragment.appendChild(createComment(comment));
    showCommentsCount++;
  });
  modalShownCommentsCount.textContent = showCommentsCount;
  commentsBlock.appendChild(commentsFragment);
  if (commentsCount <= showCommentsCount) {
    hideButton(commentsLoader);
  } else {
    showButton(commentsLoader);
  }
};

const renderPost = (evt, postArray) => {
  const photo = evt.target.closest('.picture');
  postArray.forEach((photoPost) => {
    if (photo !== null && parseInt(photo.dataset.id, 10) === photoPost.id) {
      openModalPicture();
      removeComments();
      renderData(photoPost);
      showComments = structuredClone(photoPost.comments);
      renderComments();
    }
  });
};

commentsLoader.addEventListener('click', () => renderComments(showComments));

cancelModal.addEventListener('click', () => closeModalPicture());

function onModalEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalPicture();
  }
}

function removeEscListener() {
  document.removeEventListener('keydown', onModalEscKeydown);
}

export {renderPost};
