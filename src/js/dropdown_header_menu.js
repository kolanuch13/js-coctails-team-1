// Dropdown Menu

const button = document.querySelector('.dropdown-button');
const menu = document.querySelector('.dropdown-menu');

button.addEventListener('click', event => {
	menu.classList.toggle("is-hidden");
})