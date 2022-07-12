import React, { useContext } from 'react';

import FoodItemForm from './FoodItemForm';
import CartContext from '../../../store/cart-context';
import styles from './FoodItem.module.css';

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}` // template literal, 제일 앞 $는 가격이니까 달러 표시, 문자열 형태로 가격 반환, toFixed(2)로 소숫점 아래 두 번째자리까지 나타내도록 고정

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price, // 위에서 toFixed로 정의한 변수 price 말고, props로 전달받은 props.price (숫자 그 자체 형태)
      amount: amount,
    });
  };

  return (
    <li className={styles.li}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <FoodItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodItem;