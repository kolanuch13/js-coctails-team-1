import { fetchById, fetchIngredients } from './fetch-cocktails.js';
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
  list: document.querySelector('.favorite__list'),
};

refs.btnFavCocktails.addEventListener('click', openFavCocktails);
refs.btnFavIngredients.addEventListener('click', openFavIngredients);

// FAVORITES PAGE
function openFavCocktails (event){
  event.preventDefault()
  refs.title.textContent = "Favorite cocktails";
  if (localStorage.getItem("favoriteCocktails") !== null
  && localStorage.getItem("favoriteCocktails").length > 0) {
    const query = localStorage.getItem("favoriteCocktails").split(",");

    query.map(id => {
      fetchById(id).then(data => {
          refs.list.insertAdjacentHTML("beforeend", templateFunction(data.drinks));
          modalIngredients();
          modalCocktails();
          modalCards()
      });
    })
  } else {
    refs.list.innerHTML = `<span  class="favorite__error">You haven't added any favorite cocktails yet</span>`
  }
}

function openFavIngredients (event){
  event.preventDefault()
  refs.title.textContent = "Favorite ingredients";
  if (localStorage.getItem("favoriteIngredients") !== null
  && localStorage.getItem("favoriteIngredients").length > 0) {
    const query = localStorage.getItem("favoriteIngredients").split(",");

    query.map(id => {
      fetchIngredients(id).then(data => {
          refs.list.insertAdjacentHTML("beforeend", templateFunction(data.drinks));
          modalIngredients();
          modalCocktails();
          modalCards()
      });
    })
  } else {
    refs.list.innerHTML = `<span  class="favorite__error">You haven't added any favorite cocktails yet</span>`
  }
}


