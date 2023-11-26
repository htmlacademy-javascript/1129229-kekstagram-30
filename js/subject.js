const COMMENTS_TO_SHOW = 5;
const MAX_PICTURE_POSTS = 25;
const COMMENT_LENGTH = 140;
const MAX_HASHTAGS = 5;
const HASHTAGS_ERRORS_TEXT = {
  INVALID_COUNT: 'Не должно быть больше 5 хэштэгов',
  INVALID_CORRECT: 'некорректный хэштэг',
  NOT_UNIQUE: 'Ошибочный хэштэг',
};

const USERS_NAMES = [
  'Rodney',
  'Larry',
  'Albert',
  'Alfred',
  'Robert',
  'Allan',
  'Mark',
  'Michael',
  'Gary',
  'Carl'
];

const USERS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_DESCRIPTION = [
  'Forever Young Forever drunk',
  'Work, then work harder',
  'One head is good, but two will also come up with nothing.',
  'No matter how much I think, I still do everything different',
  'My excuse is that I am young',
  'No matter what I do, I like everything'
];

export {COMMENTS_TO_SHOW, MAX_PICTURE_POSTS, USERS_NAMES, USERS_COMMENTS, PHOTOS_DESCRIPTION, COMMENT_LENGTH, MAX_HASHTAGS, HASHTAGS_ERRORS_TEXT};
