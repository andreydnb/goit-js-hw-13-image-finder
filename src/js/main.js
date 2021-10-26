const debounce = require('lodash.debounce');

import error from './pnotify';
import { refs } from './refs';
import NewsApiService from './apiService';
import imageMarkupTMPT from '../templates/imageCardMarkup.hbs';

const state = {
  searchValue: "",
  pageNumber: 1
};

refs.form.addEventListener('submit', onSearch)
refs.loadButton.addEventListener('click', onLoadMore)

const newsApiService = new NewsApiService();

function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  resetImagesList();
  newsApiService.featchArticles().then(appendImagesMarkup); 
}
  
function onLoadMore() {
  newsApiService.incrementPage();
  newsApiService.featchArticles().then(appendImagesMarkup);
}

function appendImagesMarkup(hits) {
  refs.galleryList.insertAdjacentHTML('beforeend', imageMarkupTMPT(hits));
  
}
function resetImagesList(hits) {
  refs.galleryList.innerHTML = '';
  
} 


