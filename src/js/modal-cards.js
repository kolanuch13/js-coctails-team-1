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

  let arrFavorite = [];
  
  refs.addCocktail.forEach(el => {
    el.addEventListener('click', (event) => {
      // Add to lockal storage
      const idCocktail = event.currentTarget.dataset.id;
      if (!arrFavorite.includes(idCocktail)) {
        arrFavorite.push(idCocktail);
        localStorage.setItem("favoriteCocktails", arrFavorite);
      } else {
        arrFavorite.splice(arrFavorite.indexOf(idCocktail), 1);
        localStorage.setItem("favoriteCocktails", arrFavorite);
      }
      // Check if it in there
      let storFavorite = localStorage.getItem("favoriteCocktails");
      if (storFavorite.includes(idCocktail)) {
        event.currentTarget.innerHTML = (`beforeend`, `<span>Remove</span>
        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">
                <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">
                </path>
            </svg>`);
      } else {
        event.currentTarget.innerHTML = (`beforeend`, `<span>Add to</span>
        <svg class="icon icon-heart-stroked" width="21" height="19" viewBox="0 0 35 32">
                <path style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z">
                </path>
                <path style="fill: var(--color2, #fcfcfc)" d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z">
                </path>
            </svg>`);
      }
      console.log(storFavorite);
    })
  });
};
