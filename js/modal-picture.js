import './picture.js';
const picturesAll = document.querySelector('.pictures');
const modalPicture = document.querySelector('.big-picture');
const closeModal = modalPicture.querySelector('.big-picture__cancel');
const modalShownComment = modalPicture.querySelector('.social__comment-shown-count');
const modalLikes = modalPicture.querySelector('.likes-count');
const modalImgblock = modalPicture.querySelector('.big-picture__img');
const modalImg = modalImgblock.querySelector('img');
const modalDescription = modalPicture.querySelector('.social__caption');
const modalComments = modalPicture.querySelector('.social__comment-total-count');

const comments = (commentsMultiplicity) => {
  const commentsSocial = document.querySelector('.social__comments');
  commentsSocial.textContent = '';
  const comment = document.querySelector('#comment').content;
  const commentItem = comment.querySelector('li');
  const commentsFragment = document.createDocumentFragment();
  commentsMultiplicity.forEach(() => {
    const commentCloneElement = commentItem.cloneNode(true);
    const commentElementPicture = commentCloneElement.querySelector('.social__picture');
    commentElementPicture.src = comment.avatar;
    commentElementPicture.alt = comment.name;
    commentCloneElement.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(commentCloneElement);
  });
  commentsSocial.appendChild(commentsFragment);
};

picturesAll.addEventListener('click', (evt) => {
  modalPicture.classList.remove('hidden');
  const picture = evt.target.parentElement;
  modalImg.src = picture.url;
  modalShownComment.textContent = picture.comments.length;
  modalLikes.textContent = picture.likes;
  modalComments.textContent = picture.comments.length;
  modalDescription.textContent = picture.description;
  comments(picture.comments);
});

closeModal.addEventListener('click', () => {
  modalPicture.classList.add('hidden');
});


