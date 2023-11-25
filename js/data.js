import {getRandomNum} from './util.js';

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

const createComments = () => ({
  id: getRandomNum(1, 100),
  avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
  message: USERS_COMMENTS[getRandomNum(0, USERS_COMMENTS.length - 1)],
  name: USERS_NAMES[getRandomNum(0, USERS_NAMES.length - 1)]
});

const createPost = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: PHOTOS_DESCRIPTION[getRandomNum(0, PHOTOS_DESCRIPTION.length - 1)],
  likes: getRandomNum(15, 200),
  comments: Array.from({ length: getRandomNum(0, 6) }, (_, i) => createComments(i))
});
const createPosts = () =>
  Array.from({ length: 25 }, (_, i) => createPost(i));
createPosts();

export {createPosts};
