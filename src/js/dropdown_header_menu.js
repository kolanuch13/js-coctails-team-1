// Dropdown Menu

const button = document.querySelector('.dropdown-button');
const menu = document.querySelector('.dropdown-menu');


button.addEventListener('click', event => {
	menu.classList.toggle("is-hidden");
})
// ======================================================================
const mobileButton = document.querySelector('.mobile-dropdown-button');
const mobileMenu = document.querySelector('.mobile-dropdown-menu');


mobileButton.addEventListener('click', event => {
	mobileMenu.classList.toggle("is-hidden");
})
// ======================================================================
const cocktailsSection = document.querySelector('.favorite-cocktails');
const ingredientsSection = document.querySelector('.favorites-ingredients');

const cocktailsButton = document.querySelector('.go-to-cocktails');
const ingredientsButton = document.querySelector('.go-to-ingredients');

cocktailsButton.addEventListener('click', event => {
	menu.classList.toggle("is-hidden");
	// ingredientsSection.style.display = "none";
	// cocktailsSection.style.display = "flex";
})

ingredientsButton.addEventListener('click', event => {
	menu.classList.toggle("is-hidden");
	// ingredientsSection.style.display = "flex";
	// cocktailsSection.style.display = "none";
})
