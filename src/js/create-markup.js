import { fetchCocktails, fetchLetters, fetchRandom } from './fetch-cocktails.js';
import templateFunction from '../templates/card.hbs';
import modalIngredients from './modal-ingredients.js';
import modalCocktails from './modal-cocktails.js';
import modalCards from './modal-cards.js';

const refs = {
  // PAGES
  errorPage: document.querySelector('.error'),
  cocktailsPage: document.querySelector('.cocktails'),
  // SEARCH FORM
  searchForm: document.querySelector('.search-form'),
  mSearchForm: document.querySelector('.menu__search-form'),
  searchInput: document.querySelector('#search-input'),
  // LETTER SEARCH
  container: document.querySelector('.cocktails__list'),
  letter: document.querySelector('.hero-list'),
  listMobi: document.querySelector('.hero-list__mobi'),
};

refs.searchForm.addEventListener('submit', onSearchForm);
refs.mSearchForm.addEventListener('submit', onSearchForm);

refs.letter.addEventListener('click', onClickBtn);
refs.listMobi.addEventListener('click', onClickBtn);

const startMarkup = () => {
  for (let i = 0; i < 6; i++) {
    fetchRandom().then(data => {
      const markup = templateFunction(data.drinks);
      refs.container.insertAdjacentHTML("beforeend", markup);
      modalCards();
      modalCocktails();
      modalIngredients();
    })
  }
}
startMarkup();

function onSearchForm(event) {
  event.preventDefault();
  refs.searchInput.innerHTML = '';
  const query = event.currentTarget.searchQuery.value.trim();
  
  fetchCocktails(query).then(data => {
    if (data.drinks !== null) {
      console.log(refs.cocktailsPage);
      refs.errorPage.style.display = "none";  
      refs.cocktailsPage.style.display = "flex";       
      refs.container.innerHTML = templateFunction(data.drinks);
      modalCards();
      modalCocktails();
      modalIngredients();
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
      modalIngredients();
      modalCocktails();
      modalCards()
    } else {
      refs.errorPage.style.display = "flex";
      refs.cocktailsPage.style.display = "none";
    }
  });
}


