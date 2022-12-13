export default modalAuth = () => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-auth-modal-open]"),
    closeModalBtn: document.querySelector("[data-auth-modal-close]"),
    modal: document.querySelector("[data-auth-modal]"),
  };
  refs.openModalBtn.forEach(el => {
    el.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    console.log(refs.modal);
  }
};
