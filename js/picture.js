import {renderPost} from './modal-picture.js';
const picturesAll = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('a');
const picturesAllFragment = document.createDocumentFragment();

const removeCards = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

const renderPhotoPosts = (postArray) => {
  postArray.forEach(({id, url, description, likes, comments}) => {
    removeCards();
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.id = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesAllFragment.appendChild(pictureElement);
  });
  picturesAll.appendChild(picturesAllFragment);
  picturesAll.addEventListener('click', (evt) => renderPost(evt, postArray));

};

export {renderPhotoPosts};
