const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const search_url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?';
const random_url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

export async function fetchCocktails(query) {
  const response = await fetch(`${BASE_URL}s=${query}`);
  const data = await response.json();
  return data;
}

export async function fetchLetters(query) {
  const response = await fetch(`${BASE_URL}f=${query}`);
  const data = await response.json();
  return data;
}

export async function fetchIngredients(ingr) {
  const response = await fetch(`${BASE_URL}i=${ingr}`);
  const data = await response.json();
  return data;
}

export async function fetchById(id) {
  const response = await fetch(`${search_url}i=${id}`);
  const data = await response.json();
  return data;
}

export async function fetchRandom() {
  const response = await fetch(`${random_url}`);
  const data = await response.json();
  return data;
}
