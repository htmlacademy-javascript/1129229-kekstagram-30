import {createPostArray} from './data.js';
import {MAX_PICTURE_POSTS} from './subject.js';
import {renderPhotoPosts} from './picture.js';
import './form.js';

renderPhotoPosts (createPostArray(MAX_PICTURE_POSTS));
