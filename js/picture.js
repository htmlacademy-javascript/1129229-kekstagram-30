import {createPosts} from './data.js';
import './modal-picture.js';

const picturesAll = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('a');

const photoArray = createPosts();
const picturesAllFragment = document.createDocumentFragment();

const picturePost = () => {
  photoArray.forEach(({url, description, likes, comments}) => {
    const pictureElement = templatePicture.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.likes = likes;
    pictureElement.description = description;
    pictureElement.url = url;
    pictureElement.comments = comments;
    picturesAllFragment.appendChild(pictureElement);
  });
  picturesAll.appendChild(picturesAllFragment);
};
picturePost();
