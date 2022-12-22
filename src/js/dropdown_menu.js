const button = document.querySelector('.select_wrapp');
const menu = document.querySelector('.select__dropdown');

button.addEventListener('click', event => {
	menu.classList.toggle("is-hidden");
})