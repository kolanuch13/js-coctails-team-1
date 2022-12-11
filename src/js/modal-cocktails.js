export default modalCocktails = (() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-win-open]'),
    closeModalBtn: document.querySelector('[data-modal-win-close]'),
    backdrop: document.querySelector('[data-modal-win]'),
    bottomBtn: document.querySelectorAll('.modal-ingredients__bottom-btn'),
    bottomCocktailsBtn: document.querySelectorAll(
      '.modal-cocktails__bottom-btn'
    ),
    openModalIngrBtn: document.querySelectorAll(
      '[data-modal-ingredients-open]'
    ),
    closeModalIngrBtn: document.querySelector('[data-modal-ingredients-close]'),
    backdropIngr: document.querySelector('[data-modal-ingredients]'),
  };

  // Modal cocktails

  refs.openModalBtn.forEach(el => {
    el.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', closeBackdrop);

  function closeBackdrop(e) {
    if (!e.target.closest('.modal')) {
      toggleModal();
    }
  }

  function toggleModal() {
    refs.backdrop.classList.toggle('is-win-hidden');
    console.log(1);
  }

  // Modal Ingridients

  refs.openModalIngrBtn.forEach(el => {
    el.addEventListener('click', toggleModalIngr);
  });

  refs.closeModalIngrBtn.addEventListener('click', toggleModalIngr);

  function toggleModalIngr(e) {
    e.preventDefault();
    toggleModal();
    refs.backdropIngr.classList.toggle('is-win-hidden');
  }

  refs.backdropIngr.addEventListener('click', closeBackdropIngr);

  function closeBackdropIngr(e) {
    if (!e.target.closest('.modal')) {
      refs.backdropIngr.classList.toggle('is-win-hidden');
    }
  }

  // Modal Ingridients Bottom Btn

  refs.bottomBtn.forEach(el => {
    el.addEventListener('click', toggleBottomBtn);
  });

  function toggleBottomBtn() {
    refs.bottomBtn.forEach(el => {
      if (el.textContent === 'Add to favorite') {
        el.textContent = 'Remove from favorite';
      } else {
        el.textContent = 'Add to favorite';
      }
    });
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
})();
