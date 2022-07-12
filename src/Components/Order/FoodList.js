import React from 'react';

import Card from '../UI/Card';
import FoodItem from './MealItem/FoodItem';
import styles from './FoodList.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'So happy',
    description: 'MUST TRY! Happy Salad Club signiture menu [basil pesto dressing]',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Stay Calm',
    description: '베지테리언도 즐길 수 있는 파스타 샐러드 [유자 오리엔탈 드레싱]',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Feel Better',
    description: '매콤하게 스트레스 아웃 [크리미 스리라차 드레싱]',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Caesar',
    description: '고소한 치즈향 가득 시저 샐러드 [시저 드레싱]',
    price: 18.99,
  },
];

const FoodList = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <FoodItem 
      key={meal.id}
      id={meal.id}
      name={meal.name} 
      description={meal.description}
      price={meal.price} />
  ));

  return (
    <section>
      <Card className={styles.meals}>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default FoodList;
