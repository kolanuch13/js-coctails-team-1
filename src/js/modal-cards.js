import { fetchById } from './fetch-cocktails.js';
import templateFunction from '../templates/modal-cocktails.hbs';
import modalCocktails from './modal-cocktails.js';

export default modalCards = () => {
    const refs = {
        openModalBtn: document.querySelectorAll('[data-modal-win-open]'),
        closeModalBtn: document.querySelectorAll('.js-modal-close'),
        backdrop: document.querySelector('[data-modal-win]'),
        backdropCocktails: document.querySelector('.js-backdrop-cocktails'),
          // FAVORITES
        addCocktail: document.querySelectorAll('[data-add-new-coctail]')
    };

  refs.openModalBtn.forEach(el => {
    el.addEventListener('click', openModal);
  });

  function openModal(event) {
    refs.backdrop.classList.remove('is-win-hidden');

      let idCocktail = event.currentTarget.dataset.id;
      fetchById(idCocktail).then(data => {
        refs.backdropCocktails.innerHTML = templateFunction(data.drinks);
        modalCocktails();
    });
  }

  refs.backdrop.addEventListener('click', closeBackdrop);
  
  function closeBackdrop(e) {
    if (!e.target.closest('.modal')) {
      refs.backdrop.classList.add('is-win-hidden');
    }
  }

  refs.addCocktail.forEach(el => {
    el.addEventListener('click', (event)=>{
      const idCocktail = event.currentTarget.dataset.id;
      // ==Database
      const myUser = localStorage.getItem("user");
      ///// add to

  let arrFavorite = [];

  refs.addCocktail.forEach(el => {
    el.addEventListener('click', saveId);
    // console.log(refs.addToBtn);
  });

  function saveId(event) {
    let idAddTo = event.currentTarget.dataset.id;
    arrFavorite.push(idAddTo);
    console.log(arrFavorite);
    localStorage.setItem('favoriteCocktails', arrFavorite);
  }

      // ==client
      const favorites = localStorage.getItem('favoriteCocktails');
      // if (favorites.indexOf(idCocktail) === null) {
      //   localStorage.setItem('favoriteCoctails', idCocktail)
      // } else {
      //   localStorage.removeItem('favoriteCoctails', idCocktail)
      // };
      console.log(favorites);
    })
  });
};
