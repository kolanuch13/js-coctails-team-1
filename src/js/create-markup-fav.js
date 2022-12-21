import { fetchCocktails, fetchLetters, fetchRandom } from './fetch-cocktails.js';
import templateFunction from '../templates/card.hbs';
import modalIngredients from './modal-ingredients.js';
import modalCocktails from './modal-cocktails.js';
import modalCards from './modal-cards.js';

const refs = {
  // FAVORITES
  favCocktails: document.querySelector('.favorite-cocktails'),
  favIngredients: document.querySelector('.favorite-ingredients'),
  // FAVORITES WHAT
  btnFavCocktails: document.querySelector('.go-to-cocktails'),
  btnFavIngredients: document.querySelector('.go-to-ingredients'),
  // elements
  title: document.querySelector('.favorite__title'),
};

refs.btnFavCocktails.addEventListener('click', openFavCocktails);
refs.btnFavIngredients.addEventListener('click', openFavIngredients);

// FAVORITES PAGE
function openFavCocktails (event){
  refs.title.textContent = "ShabuLabudibu";
  // const favCocktails = localStorage.getItem("favoriteCocktails");

  // const query = event.target.dataset.value;
  
  // fetchLetters(query).then(data => {
  //   if(data.drinks !== null) {
  //     refs.errorPage.style.display = "none";
  //     refs.cocktailsPage.style.display = "flex";
  //     refs.container.innerHTML = templateFunction(data.drinks);
  //     modalIngredients();
  //     modalCocktails();
  //     modalCards()
  //   } else {
  //     refs.errorPage.style.display = "flex";
  //     refs.cocktailsPage.style.display = "none";
  //   }
  // });
}

function openFavIngredients (event){
  refs.favCocktails.style.display = "none";
  refs.favIngredients.style.display = "flex";
}


