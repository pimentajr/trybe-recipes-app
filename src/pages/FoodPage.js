import React from 'react';
import HeaderFood from '../components/HeaderFood';
import CardRecipeList from '../components/CardRecipeList';
import Footer from '../components/Footer';
import NavCategories from '../components/NavCategories';

function foodPage(props) {
  const { ingredient } = props.location.state;
  return (
    <div>
      <HeaderFood title="Comidas" search />
      <NavCategories origin="Food" />
      <CardRecipeList origin="Food" text={ ingredient } />
      <Footer />
    </div>
  );
}

export default foodPage;
