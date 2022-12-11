import { fetchCocktails } from './js/fetchCocktails.js';
import templateFunction from './templates/card.hbs';
import templateCocktailFunction from './templates/modal-cocktails.hbs';
import templateIngredientFunction from './templates/modal-ingredients.hbs';

import modalCocktails from './js/modal-cocktails.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('.search-input'),
  searchBtn: document.querySelector('.search-button'),
  container: document.querySelector('.coctails__list'),
};

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(event) {
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  page = 1;
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    refs.container.innerHTML = templateFunction(data.drinks);
  });
}
