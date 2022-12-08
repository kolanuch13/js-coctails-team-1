import mobileMenu from './js/mobile-menu';
mobileMenu();

import { fetchCocktails } from './js/fetchCocktails.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('.search-input'),
  searchBtn: document.querySelector('.search-button'),
};

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(event) {
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  page = 1;
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    console.log(data.drinks);
  });
}
