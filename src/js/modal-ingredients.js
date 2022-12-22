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

  
  let arrFavoriteIngredients = [];
  if (localStorage.getItem("favoriteIngredients") !== null) {
    arrFavoriteIngredients = localStorage.getItem("favoriteIngredients").split(",");
    refs.bottomBtn.forEach(el => {
      const idIngredients = el.dataset.id;
      if (arrFavoriteIngredients.includes(idIngredients)) {
        el.innerHTML = (`beforeend`, `<span>Remove from favorite</span>`);
      } else {
        el.innerHTML = (`beforeend`, `<span>Add to favorite</span`);
      }
    })
  }

  refs.bottomBtn.forEach(el => {
    el.addEventListener('click', (event) => {
      // Add to lockal storage
      const idIngredients = event.currentTarget.dataset.id;
      if (!arrFavoriteIngredients.includes(idIngredients)) {
        arrFavoriteIngredients.push(idIngredients);
        localStorage.setItem("favoriteIngredients", arrFavoriteIngredients);
      } else {
        arrFavoriteIngredients.splice(arrFavoriteIngredients.indexOf(idIngredients), 1);
        localStorage.setItem("favoriteIngredients", arrFavoriteIngredients);
      }
      // Check if it in there
      let storFavorite = localStorage.getItem("favoriteIngredients");
      if (storFavorite.includes(idIngredients)) {
        el.innerHTML = (`beforeend`, `<span>Remove from favorite</span>`);
      } else {
        el.innerHTML = (`beforeend`, `<span>Add to favorite</span`);
      }
    })
  });
};
