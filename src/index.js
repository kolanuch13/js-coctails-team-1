import { fetchCocktails } from './js/fetchCocktails.js';
import templateFunction from './templates/card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('.search-input'),
  searchBtn: document.querySelector('.search-button'),
  container: document.querySelector('.coctails__list1'),
};
console.log(refs.container);

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(event) {
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    let result = [];
    const totalItems = data.drinks;

    for (let i = 0; i < 6; i++) {
      result.push(data.drinks[i]);
    }

    refs.container.innerHTML = templateFunction(result);
  });
}

