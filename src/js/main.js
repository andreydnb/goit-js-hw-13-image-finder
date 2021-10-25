const debounce = require('lodash.debounce');

import error from './pnotify';
import { refs } from './refs';
import fetchImages from './fetchImage';
import imageMarkupTMPT from '../templates/imageCardMarkup.hbs';

const state = {
  searchValue: "",
  pageNumber: 1
};
