import {createPosts} from './data.js';

const picturesAll = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('a');

const photoArray = createPosts();
const picturesAllFragment = document.createDocumentFragment();

photoArray.forEach(({ url, description, likes, comments }) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  picturesAllFragment.appendChild(photoElement);
});

picturesAll.appendChild(picturesAllFragment);
