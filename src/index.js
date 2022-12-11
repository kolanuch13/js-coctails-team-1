import { fetchCocktails } from './js/fetchCocktails.js';
import templateFunction from './templates/card.hbs';
import Pagination from "./js/Pagination";

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('.search-input'),
  searchBtn: document.querySelector('.search-button'),
  container: document.querySelector('.coctails__list')
};

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(event) {
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    let result = [];
    const totalItems = data.drinks.length;
    // ========================================================== 
    let pagination = new Pagination('pagination', {
      totalItems: totalItems,
      itemsPerPage: 6,
      visiblePages: 5
    });
    
    console.log(pagination._setCurrentPage);
    // ==========================================================
    for (let i = 0; i < 6; i++) {
      result.push(data.drinks[i]);
    }
    console.log(result);
    // ==========================================================
    refs.container.innerHTML = templateFunction(result);
  });
}
