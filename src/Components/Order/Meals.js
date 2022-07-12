import React from 'react';

import ReactMealsIntro from './ReactMealsIntro';
import FoodList from './FoodList';

const Meals = () => {
  return (
    <React.Fragment>
      <ReactMealsIntro />
      <FoodList />
    </React.Fragment>
  )
};

export default Meals;