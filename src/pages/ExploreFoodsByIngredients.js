import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import RecipeAppContext from '../context/RecipeAppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/explore.css';

function ExploreFoodsByIngredients() {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [shouldRedirectToPageFoods, setShouldRedirectToPageFoods] = useState(false);
  const { setFoodList, setToggleOn } = useContext(RecipeAppContext);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const json = await response.json();
      const { meals } = json;
      setIngredients(meals);
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  function redirectToPageFood({ target: { id } }) {
    const fetchApi = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`);
      const json = await response.json();
      const { meals } = json;
      setFoodList(meals);
      setToggleOn(true);
      setShouldRedirectToPageFoods(true);
    };
    fetchApi();
  }

  function renderIngredientsCard() {
    const maxLength = 12;
    const cardsIngredients = ingredients.map((ingredient, index) => {
      if (index < maxLength) {
        return (
          <div
            key={ ingredient.strIngredient }
            role="link"
            tabIndex={ 0 }
            data-testid={ `${index}-ingredient-card` }
            className="card-ingredients"
            id={ ingredient.strIngredient }
            onClick={ (event) => redirectToPageFood(event) }
            onKeyDown={ (event) => redirectToPageFood(event) }
          >
            <img
              alt="thumbnail drink"
              height="25"
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
          </div>
        );
      } return null;
    });
    return cardsIngredients;
  }

  return (
    <div>
      <h1>My Explore Foods By Ingredients Page</h1>
      <Header title="Explorar Ingredientes" />

      <div>
        { isLoading ? <p>Carregando...</p> : renderIngredientsCard() }
      </div>

      <span>
        { shouldRedirectToPageFoods ? <Redirect to="/comidas" /> : <div /> }
      </span>

      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
