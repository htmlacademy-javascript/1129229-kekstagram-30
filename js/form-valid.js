import { COMMENT_LENGTH, MAX_HASHTAGS, HASHTAGS_ERRORS_TEXT } from './subject.js';
const form = document.querySelector('.img-upload__form');
const hashInputElement = form.querySelector('.text__hashtags');
const commentInputElement = form.querySelector('.text__description');

const validateComment = (value) =>
  value.length <= COMMENT_LENGTH;

const hashtagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;

const getHashtags = (hashtagString) => {
  const hashtags = [];
  let hashtagArray = hashtagString.trim().split(' ');
  hashtagArray = hashtagArray.filter((hashtag) => Boolean(hashtag) === true);
  hashtagArray.forEach((hashtag) => hashtags.push(hashtag.trim()));
  return hashtags;
};

const isHashtagsCount = (hashtagString) => {
  const hashtags = getHashtags(hashtagString);
  return hashtags.length <= MAX_HASHTAGS;
};
const isHashtagsUnique = (hashtagString) => {
  const hashtags = getHashtags(hashtagString.toLowerCase());
  const arrayWithoutLastIndex = hashtags.slice(0, -1);
  const hashtagArrayLastIndex = hashtags[hashtags.length - 1];
  return !arrayWithoutLastIndex.includes(hashtagArrayLastIndex);
};

const isHashtagsCorrect = (hashtagString) => {
  if (hashtagString === '') {
    return true;
  }
  const hashtags = getHashtags(hashtagString);
  const currentHashTag = hashtags[hashtags.length - 1];
  return hashtagRegExp.test(currentHashTag);
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const resetData = () => {
  pristine.reset();
  hashInputElement.value = '';
  commentInputElement.value = '';
};

pristine.addValidator(commentInputElement,
  validateComment,
  'Не более 140 символов');

pristine.addValidator(
  hashInputElement,
  isHashtagsCount,
  HASHTAGS_ERRORS_TEXT.INVALID_COUNT,
  false);

pristine.addValidator(
  hashInputElement,
  isHashtagsUnique,
  HASHTAGS_ERRORS_TEXT.NOT_UNIQUE,
  2,
  false);

pristine.addValidator(hashInputElement,
  isHashtagsCorrect,
  'некорректный хэштэг',
  HASHTAGS_ERRORS_TEXT.INVALID_CORRECT,
  false);

const isValidation = () => pristine.validate();

export {resetData, isValidation};
