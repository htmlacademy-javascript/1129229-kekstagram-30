import {getRandomElement, getRandomNum} from './util';
import {PHOTOS_DESCRIPTION, USERS_COMMENTS, USERS_NAMES} from './subject.js';
let pictureCount;

const generatePhotoId = () => {
  let id = 0;
  return function () {
    while (id < pictureCount) {
      id += 1;
      return id;
    }
  };
};

const generateCommentId = () => {
  let id = 0;
  return function () {
    id += 1;
    return id;
  };
};

const createCommentId = generateCommentId();
const createId = generatePhotoId();

const createComment = () => {
  const commentId = createCommentId();
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNum (1, 6)}.svg`,
    message: getRandomElement(USERS_COMMENTS),
    name: getRandomElement(USERS_NAMES)
  };
};

const createPost = () => {
  const commentsCount = getRandomNum (0, 30);
  const commentsArray = Array.from({length: commentsCount}, createComment);
  const photoID = createId();
  return ({
    id: photoID,
    url: `photos/${photoID}.jpg`,
    description: getRandomElement(PHOTOS_DESCRIPTION),
    likes: getRandomNum (15, 200),
    comments: commentsArray
  });
};

const createPostArray = (n) => {
  pictureCount = n;
  return Array.from({length: pictureCount}, createPost);
};

export {createPostArray};
