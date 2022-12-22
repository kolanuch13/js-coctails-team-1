const button = document.querySelector('.mobile-dropdown-button');
const menu = document.querySelector('.mobile-dropdown-menu');

button.addEventListener('click', event => {
	menu.classList.toggle("is-hidden");
})