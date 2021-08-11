import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import FavoriteButton from '../../globalComponents/FavoriteButtonMeals';
import shareIcon from '../../images/shareIcon.svg';

function FoodInProgress({ match }) {
  const { id } = match.params;
  const [ingredients, setIngredients] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [added, setAdd] = useState({});
  const [copied, setCopied] = useState(false);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem('adding');
    const parsed = JSON.parse(cached);
    if (parsed) setAdd(parsed);
  }, []);

  useEffect(() => {
    localStorage.setItem('adding', JSON.stringify(added));
    const inputCheckboxs = document.querySelectorAll('input');
    const hasValues = Object.values(added).length === inputCheckboxs.length;
    const verifyChecked = hasValues && Object
      .values(added).every((item) => item === true);
    if (verifyChecked) setDisable(false);
    if (!verifyChecked) setDisable(true);
  }, [added]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json())
      .then((result) => {
        console.log({ result });
        setIngredients(result.meals);
      });
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(favoriteRecipes);
    const favorites = favoriteRecipes && favoriteRecipes.some((item) => item.id === id);
    if (favorites) {
      setFavorite(true);
    }
  }, [id]);

  function toList(line) {
    const magicNumber = 20;
    const ingredientList = new Array(magicNumber).fill().map((_, i) => {
      const ingredientKey = `strIngredient${i + 1}`;
      const measureKey = `strMeasure${i + 1}`;
      console.table({ ingredientKey: line[ingredientKey], measureKey: line[measureKey] });
      return [line[ingredientKey], line[measureKey]];
    }).filter(([ingredient, measure]) => {
      if (ingredient && measure) {
        return [ingredient, measure];
      }
      return null;
    });
    return { ...line, ingredientList };
  }

  const shareButtonHandle = () => {
    setCopied(true);
    const mSeconds = 2000;
    copy(`http://localhost:3000/comidas/${id}`);
    setTimeout(() => {
      setCopied(false);
    }, mSeconds);
  };

  return (
    <div>
      {ingredients && ingredients.map(toList)
        .map(({ ingredientList, ...meal }, index) => (
          <div key={ index }>
            <img data-testid="recipe-photo" src={ meal.strMealThumb } alt="" />
            <p data-testid="recipe-title">{meal.strMeal}</p>
            <p data-testid="recipe-category">{meal.strCategory}</p>
            <button
              data-testid="share-btn"
              type="button"
              onClick={ shareButtonHandle }
            >
              <img src={ shareIcon } alt="share" />
            </button>
            <FavoriteButton
              meals={ ingredients[0] }
              favorite={ favorite }
              setFavorite={ setFavorite }
              id={ id }
            />
            <p>{copied ? 'Link copiado!' : null}</p>

            {ingredientList.map(([ingredient, measure], i) => (
              <div key={ i } data-testid={ `${i}-ingredient-step` }>
                <span>{ingredient}</span>
                :
                <span>{ measure }</span>
                <input
                  type="checkbox"
                  checked={ added[i.toString()] }
                  onClick={ (event) => setAdd({ ...added,
                    [i]: event.target.checked }) }
                />
              </div>
            ))}
            <p>instructions:</p>
            <p data-testid="instructions">{meal.strInstructions}</p>
            <Link to="/receitas-feitas">
              <button
                type="button"
                data-testid="finish-recipe-btn"
                disabled={ disable }
              >
                Finalizar Receita
              </button>
            </Link>
            <br />
          </div>
        ))}
    </div>
  );
}

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default FoodInProgress;
