modalWin = () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-win-open]'),
    closeModalBtn: document.querySelector('[data-modal-win-close]'),
    modal: document.querySelector('[data-modal-win]'),
    btn: document.querySelector('.modal__bottom-btn'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.btn.addEventListener('click', toggleBottomBtn);

  function toggleBottomBtn() {
    if (refs.btn.textContent === 'Add to favorite') {
      refs.btn.textContent = 'Remove from favorite';
    } else {
      refs.btn.textContent = 'Add to favorite';
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-win-hidden');
  }
};
