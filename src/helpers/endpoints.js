const URLDictionary = {
  foods: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  filterByFoodCategorie:
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=', //input
  filterByDrinkCategorie:
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=', //input
  foodIngredients: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  foodAreaList: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
  foodAreaFilter: 'https:www.themealdb.com/api/json/v1/1/filter.php?a=', //input
  drinkIngredients: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  drinkAreaList: 'https://www.thecoktail.com/api/json/v1/1/list.php?a=list',
  foodCategories: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  drinksCategories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  randomFoodRecipe: 'https://www.themealdb.com/api/json/v1/1/random.php',
  randomDrinkRecipe: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  foodByIngredients: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=', //input
  drinkByIngredients: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=', //input
  foodFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=', //input
  drinkFirstLetter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=', //input
  foodByName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=', //input
  drinkByName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', //input
  foodDetails: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=', //input
  drinkDetails: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=', //input
};

export default URLDictionary;

export const { foods } = URLDictionary;
