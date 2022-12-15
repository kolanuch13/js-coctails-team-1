import { fetchById } from './fetch-cocktails.js';
import { db, dbRefCheck } from './db-firebase';
import { ref, set, get, child, update } from 'firebase/database';
import {arrayUnion} from 'firebase/firestore';


import {templateFunctionCocktails} from '../templates/modal-cocktails.hbs';
import {modalCocktails} from './modal-cocktails.js';

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

  refs.addCocktail.forEach(el => {
    el.addEventListener('click', (event)=>{
      const idCocktail = event.currentTarget.dataset.id;
      console.log(idCocktail);
      // ==Database
      const myUser = localStorage.getItem("user");
      // ==client
      console.log(localStorage.getItem('favoriteCocktails').indexOf(idCocktail));
      const favorites = localStorage.getItem('favoriteCocktails');
      if (favorites.indexOf(idCocktail) === null) {
        localStorage.setItem('favoriteCoctails', idCocktail)
      } else {
        localStorage.removeItem('favoriteCoctails', idCocktail)
      };
    })
  });
};
