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

const COMMENTS_TO_SHOW = 5;
const MAX_PICTURE_POSTS = 25;
const COMMENT_LENGTH = 140;
const COMMENT_LENGTH_ERROR = 'Не более 140 символов';
const MAX_HASHTAGS = 5;
const HASHTAGS_ERRORS_TEXT = {
  INVALID_COUNT: 'Не должно быть больше 5 хэштэгов',
  INVALID_CORRECT: 'некорректный хэштэг',
  NOT_UNIQUE: 'Ошибочный хэштэг',
};

const SCOPE_STEP = {
  PERCENTS: 25,
  VALUE: 0.25,
};
const MAX_SCOPE = {
  PERCENTS: 100,
  VALUE: 1,
};
const MIN_SCOPE = {
  PERCENTS: 25,
  VALUE: 0.25,
};
const DEFOULT_SCOPE = {
  PERCENTS: 100,
  VALUE: 1,
};

const FilterEffects = {
  none: 'None',
  chrome: 'Chrome',
  sepia: 'Sepia',
  marvin: 'Marvin',
  phobos: 'Phobos',
  heat: 'Heat'
};

const Filters = {
  None: {
    effect: 'none',
    effectValue: 0,
    min: 0,
    max: 0,
    step: 0,
    unit: '',
  },
  Chrome: {
    effect: 'grayscale',
    effectValue: 1,
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  Sepia: {
    effect: 'sepia',
    effectValue: 1,
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  Marvin: {
    effect: 'invert',
    effectValue: 1,
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  Phobos: {
    effect: 'blur',
    effectValue: 1,
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  Heat: {
    effect: 'brightness',
    effectValue: 1,
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

export {COMMENTS_TO_SHOW, MAX_PICTURE_POSTS, USERS_NAMES, USERS_COMMENTS, PHOTOS_DESCRIPTION, COMMENT_LENGTH, COMMENT_LENGTH_ERROR, MAX_HASHTAGS, HASHTAGS_ERRORS_TEXT, SCOPE_STEP, MAX_SCOPE, MIN_SCOPE, DEFOULT_SCOPE, FilterEffects, Filters};
