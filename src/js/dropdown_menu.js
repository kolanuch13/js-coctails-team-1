const refs = {
  customSelect: document.querySelector('.select'),
  dropDown: document.querySelector('.select__dropdown'),
  listMobi: document.querySelector('.hero-list__mobi'),
  selectText: document.querySelector('.input-text'),
  svgHero: document.querySelector('.hero__icon'),
} 

refs.customSelect.addEventListener('click', onClickCustomSelect);

function onClickCustomSelect() {
  refs.dropDown.classList.toggle('is-hidden');
}

refs.customSelect.classList.remove('change-bgcolor');
refs.selectText.classList.remove('change-color');
refs.svgHero.classList.remove('change-icon-color');


function onClickList(event) {
  refs.customSelect.classList.add('change-bgcolor');
  refs.selectText.classList.add('change-color');
  refs.svgHero.classList.add('change-icon-color');
  const result = event.target.dataset.value;
  refs.selectText.textContent = result;
  refs.dropDown.classList.toggle('is-hidden');
  return onClickBtn(event);
}
