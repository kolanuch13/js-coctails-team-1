export default modalIngredients = () => {
  const refs = {
    bottomBtn: document.querySelectorAll('.modal-ingredients__bottom-btn'),
    closeModalIngrBtn: document.querySelectorAll(
      '[data-modal-ingredients-close]'
    ),
    backdropIngr: document.querySelector('[data-modal-ingredients]'),
  };

  // Modal Ingridients Bottom Btn

  refs.closeModalIngrBtn.forEach(el => {
    el.addEventListener('click', closeModalIngr);
  });

  function closeModalIngr() {
    refs.backdropIngr.classList.add('is-win-hidden');
  }

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
};
