// Dropdown Menu

const button = document.querySelector('.dropdown-button');
const menu = document.querySelector('.dropdown-menu');


button.addEventListener('click', event => {
	menu.classList.toggle("is-hidden");
})
// ======================================================================
const cocktailsSection = document.querySelector('.favorite-cocktails');
const ingredientsSection = document.querySelector('.favorites-ingredients');

const cocktailsButton = document.querySelector('.go-to-cocktails');
const ingredientsButton = document.querySelector('.go-to-ingredients');

console.log(cocktailsSection.style);

cocktailsButton.addEventListener('click', event => {
	ingredientsSection.style.display = "none";
	cocktailsSection.style.display = "flex";
})

ingredientsButton.addEventListener('click', event => {
	ingredientsSection.style.display = "flex";
	cocktailsSection.style.display = "none";
})
