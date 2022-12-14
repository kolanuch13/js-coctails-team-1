import { fetchById } from './fetchCocktails';
import templateFunctionCocktails from '../templates/modal-cocktails.hbs';
import modalCocktails from './modal-cocktails';

export default modalCards = () => {
    const refs = {
        openModalBtn: document.querySelectorAll('[data-modal-win-open]'),
        closeModalBtn: document.querySelectorAll('.js-modal-close'),
        backdrop: document.querySelector('[data-modal-win]'),
        backdropCocktails: document.querySelector('.js-backdrop-cocktails'),
    };

  refs.openModalBtn.forEach(el => {
    el.addEventListener('click', openModal);
  });

  function openModal(event) {
    refs.backdrop.classList.remove('is-win-hidden');

      let idCocktail = event.currentTarget.dataset.id;
      console.log(idCocktail);

    fetchById(idCocktail).then(data => {
        refs.backdropCocktails.innerHTML = templateFunctionCocktails(data.drinks);
        modalCocktails();
    });
  }

  refs.backdrop.addEventListener('click', closeBackdrop);
  function closeBackdrop(e) {
    if (!e.target.closest('.modal')) {
      refs.backdrop.classList.add('is-win-hidden');
    }
  }
};
