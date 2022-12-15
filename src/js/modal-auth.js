
  const refs = {
    modal: document.querySelector("[data-auth-modal]"),
    openModalBtn: document.querySelector(".auth-modal-button-open"),
    closeModalBtn: document.querySelector("[data-auth-modal-close]"),
  };
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal(event) {
    refs.modal.classList.toggle("is-hidden");
  }

