const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

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
