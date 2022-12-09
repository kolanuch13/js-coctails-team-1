// import * as API from './fetchCocktails';
// import ImageApiService from './fetch.js';
// import axios from "axios";

const ulContainer = document.querySelector('.hero-list');
const liItems = document.querySelector('.hero-item');


export default async function onClickBtn (event){
    console.log(event.target.dataset.value);
}

ulContainer.addEventListener('click', onClickBtn);








