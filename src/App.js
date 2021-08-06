import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoneRecipes, DrinkInProgress, Drinks, Explore, ExploreDrinks,
  ExploreDrinksIngredients, ExploreFoodByArea, ExploreFoodIngredients, ExploreFoods,
  FavoriteRecipes, FoodDetails, FoodInProgress, Foods, Login, Profile } from './pages';
import DrinkDetails from './pages/DrinkDetails';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route path="/comidas/:id" render={ (props) => <FoodDetails { ...props } /> } />
        <Route path="/bebidas/:id" render={ (props) => <DrinkDetails { ...props } /> } />
        <Route path="/comidas/{id-da-receita}/in-progress" component={ FoodInProgress } />
        <Route
          path="/bebidas/{id-da-receita}/in-progress"
          component={ DrinkInProgress }
        />
        <Route exact path="/explorar" component={ Explore } />
        <Route path="/explorar/comidas" component={ ExploreFoods } />
        <Route path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksIngredients }
        />
        <Route path="/explorar/comidas/area" component={ ExploreFoodByArea } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route component={ NotFound } />

      </Switch>
    );
  }
}
