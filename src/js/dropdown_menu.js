import {fetchCocktails} from './fetchCocktails';
import onClickBtn from './alphabet_search';

const customSelect = document.querySelector('.select');
const dropDown = document.querySelector('.select__dropdown');
const listMobi = document.querySelector('.hero-list__mobi');
const selectText = document.querySelector('.input-text');
const svgHero = document.querySelector('.hero__icon');

function onClickBtn (event){
  console.log(event.target.dataset.value);
}

customSelect.addEventListener('click', onClickCustomSelect);

function onClickCustomSelect() {
  dropDown.classList.toggle('is-hidden');
  listMobi.addEventListener('click', onClickList);
}
customSelect.classList.remove('change-bgcolor');
selectText.classList.remove('change-color');
svgHero.classList.remove('change-icon-color');


function onClickList(event) {
  customSelect.classList.add('change-bgcolor');
  selectText.classList.add('change-color');
  svgHero.classList.add('change-icon-color');
  const result = event.target.dataset.value;
  selectText.textContent = result;
  dropDown.classList.toggle('is-hidden');
  return onClickBtn(event);
}
