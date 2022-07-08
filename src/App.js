import React from 'react';

import FoodList from './Components/Order/FoodList';
import Button from './Components/UI/Button';
import Modal from './Components/UI/Modal';
import Card from './Components/UI/Card';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Modal></Modal>
      <header>
        <h1>ReactMeals</h1>
        <Button>Your Cart</Button>
      </header>
      <Card>
        <article>
          <h2>Delicious Food, Delivered To You</h2>
          <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.<br /> All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </article>
      </Card>
      <Card>
        <FoodList></FoodList>
      </Card>
    </React.Fragment>
  );
}

export default App;
