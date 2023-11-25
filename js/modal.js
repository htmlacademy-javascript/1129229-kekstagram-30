const commentsBlock = document.querySelector('.social__comments');
const comment = document.querySelector('#comment').content;
const commentTemplate = comment.querySelector('li');
const modalPicture = document.querySelector('.big-picture');
const modalImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
const modalShownCommentsCount = modalPicture.querySelector('.social__comment-shown-count');
const modalLikes = modalPicture.querySelector('.likes-count');
const modalCaption = modalPicture.querySelector('.social__caption');
const modalAllComments = modalPicture.querySelector('.social__comment-total-count');
const commentsFragment = document.createDocumentFragment();
let commentsCount = 0;

const createComment = (showComment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentElementPicture = commentElement.querySelector('.social__picture');
  commentElementPicture.src = showComment.avatar;
  commentElementPicture.alt = showComment.name;
  commentElement.querySelector('.social__text').textContent = showComment.message;
  return commentElement;
};

const renderData = (photoPost) => {
  modalImg.src = photoPost.url;
  modalShownCommentsCount.textContent = photoPost.comments.length;
  modalLikes.textContent = photoPost.likes;
  commentsCount = photoPost.comments.length;
  modalAllComments.textContent = commentsCount;
  modalCaption.textContent = photoPost.description;
};

export {createComment, renderData, commentsBlock, commentsFragment,
  modalPicture, modalShownCommentsCount, commentsCount};
