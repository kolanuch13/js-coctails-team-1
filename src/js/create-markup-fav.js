import { fetchById, fetchIngredientsId } from './fetch-cocktails.js';
import templateFunctionCocktails from '../templates/card.hbs';
import templateFunctionIngredients from '../templates/card-ingredient.hbs';
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

refs.btnFavCocktails.addEventListener('click', event => openFavCocktails(event, true));
refs.btnFavIngredients.addEventListener('click', openFavIngredients);

// FAVORITES PAGE
function openFavCocktails(event, isOn) {
  if (isOn === true) {
    event.preventDefault()
  }
  refs.title.textContent = "Favorite cocktails";
  if (localStorage.getItem("favoriteCocktails") !== null
  && localStorage.getItem("favoriteCocktails").length > 0) {
    const query = localStorage.getItem("favoriteCocktails").split(",");
    refs.list.innerHTML = "";

    query.map(id => {
      fetchById(id).then(data => {
          refs.list.insertAdjacentHTML("beforeend", templateFunctionCocktails(data.drinks));
          modalCards()
          modalCocktails();
          modalIngredients();
      });
    })
  } else {
    refs.list.innerHTML = `<span  class="favorite__error">You haven't added any favorite cocktails yet</span>`
  }
}
openFavCocktails(event, false)

function openFavIngredients (event){
  event.preventDefault()
  refs.title.textContent = "Favorite ingredients";
  if (localStorage.getItem("favoriteIngredients") !== null
  && localStorage.getItem("favoriteIngredients").length > 0) {
    const query = localStorage.getItem("favoriteIngredients").split(",");
    refs.list.innerHTML = "";

    query.map(id => {
      fetchIngredientsId(id).then(data => {
          refs.list.insertAdjacentHTML("beforeend", templateFunctionIngredients(data.ingredients));
          modalCards()
          modalCocktails();
          modalIngredients();
      });
    })
  } else {
    refs.list.innerHTML = `<span  class="favorite__error">You haven't added any favorite cocktails yet</span>`
  }
}


