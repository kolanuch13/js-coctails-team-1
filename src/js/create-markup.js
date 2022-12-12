import { fetchCocktails, fetchLetters } from './fetchCocktails.js';
import templateFunction from '../templates/card.hbs';
import modalCocktails from './modal-cocktails';

const refs = {
  // PAGES
  errorPage: document.querySelector('.error'),
  cocktailsPage: document.querySelector('.coсtails'),
  // SEARCH FORM
  searchForm: document.querySelector('.search-form'),
  mSearchForm: document.querySelector('.menu__search-form'),
  searchInput: document.querySelector('#search-input'),
  // LETTER SEARCH
  container: document.querySelector('.coctails__list'),
  letter: document.querySelector('.hero-list'),
  listMobi: document.querySelector('.hero-list__mobi'),
};

refs.searchForm.addEventListener('submit', onSearchForm);
refs.mSearchForm.addEventListener('submit', onSearchForm);
refs.letter.addEventListener('click', onClickBtn);
refs.listMobi.addEventListener('click', onClickBtn);


function onSearchForm(event) {
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  const query = event.currentTarget.searchQuery.value.trim();
  
  fetchCocktails(query).then(data => {
    if(data.drinks !== null) {
      refs.errorPage.style.display = "none";  
      refs.cocktailsPage.style.display = "flex";       
      refs.container.innerHTML = templateFunction(data.drinks);
      modalCocktails();
    } else {
      refs.errorPage.style.display = "flex";  
      refs.cocktailsPage.style.display = "none";          
    }
  });
}

function onClickBtn (event){
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  const query = event.target.dataset.value;
  
  fetchLetters(query).then(data => {
    if(data.drinks !== null) {
      refs.errorPage.style.display = "none";
      refs.cocktailsPage.style.display = "flex";
      refs.container.innerHTML = templateFunction(data.drinks);
      modalCocktails();
    } else {
      refs.errorPage.style.display = "flex";
      refs.cocktailsPage.style.display = "none";
    }
  });
}