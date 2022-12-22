import { fetchIngredients } from './fetch-cocktails.js';
import templateFunction from '../templates/modal-ingredients.hbs';
import modalIngredients from './modal-ingredients.js';

export default modalCocktails = () => {
  const refs = {
    closeModalBtn: document.querySelectorAll('[data-modal-win-close]'),
    backdrop: document.querySelector('[data-modal-win]'),
    bottomCocktailsBtn: document.querySelectorAll('.modal-cocktails__bottom-btn'),
    openModalIngrBtn: document.querySelectorAll('[data-modal-ingredients-open]'),
    backdropIngr: document.querySelector('[data-modal-ingredients]'),
    backdropIngredients: document.querySelector('.js-backdrop-ingredients'),
  };

  // Close modal Cocktails btn

  refs.closeModalBtn.forEach(el => {
    el.addEventListener('click', closeModal);
  });

  function closeModal() {
    refs.backdrop.classList.add('is-win-hidden');
  }

  // Modal Cocktails Bottom Btn

  refs.bottomCocktailsBtn.forEach(el => {
    el.addEventListener('click', toggleBottomCocktailsBtn);
  });

  function toggleBottomCocktailsBtn() {
    refs.bottomCocktailsBtn.forEach(el => {
      if (el.textContent === 'Add to favorite') {
        el.textContent = 'Remove from favorite';
      } else {
        el.textContent = 'Add to favorite';
      }
    });
  }

  // Modal Ingridients

  refs.openModalIngrBtn.forEach(el => {
    if (el.textContent === '') {
      el.closest('li').remove();
    } else {
      el.addEventListener('click', openModalIngr);
    }
  });
  
  function openModalIngr(event) {
    event.preventDefault();
    closeModal();
    refs.backdropIngr.classList.remove('is-win-hidden');
    let ingr = event.currentTarget.dataset.id;

    fetchIngredients(ingr).then(data => {
      refs.backdropIngredients.innerHTML = templateFunction(
        data.ingredients
      );
      modalIngredients();
    });
  }

  refs.backdropIngr.addEventListener('click', closeBackdropIngr);

  function closeBackdropIngr(e) {
    if (!e.target.closest('.modal')) {
      refs.backdropIngr.classList.add('is-win-hidden');
    }
  }
};
