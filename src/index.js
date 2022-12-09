import { fetchCocktails } from './js/fetchCocktails.js';
import CoctailApiService from './js/fetch';
import templateFunction from './templates/card.hbs';
import Pagination from 'tui-pagination'; 

const myRequest = new CoctailApiService();

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('.search-input'),
  searchBtn: document.querySelector('.search-button'),
  container: document.querySelector('.coctails__list'),
  tui: document.querySelector('#tui-pagination-container')
};

const instance = new Pagination(refs.tui, {
  number: 6,
});

instance.getCurrentPage();

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(event) {
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  const query = event.currentTarget.searchQuery.value.trim();
  myRequest.searchQuery = query;
  myRequest.page = 1;
  myRequest.fetchCoctails()
    .then(data => {
      //  refs.container.innerHTML = templateFunction(data.drinks);
    })

  // fetchCocktails(query).then(data => {
  //   refs.container.innerHTML = templateFunction(data.drinks);
  // });
}