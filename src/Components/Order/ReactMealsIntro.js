import React from 'react';

import styles from './ReactMealsIntro.module.css';

const ReactMealsIntro = () => {
  return (
    <article className={styles.article}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.<br /> All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </article>
  );
};

export default ReactMealsIntro;