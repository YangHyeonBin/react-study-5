import React, { useContext, useEffect, useState } from "react";

import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = cartCtx; // object destructuring

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0); // reduce=JS array method, curNumber=currentNumber, 0=initialValue=reduce에 넘긴 콜백의 최초 호출에서 첫 번째 인수인 curNumber에 제공할 초기값(optional, 지정 없을 시 배열의 첫 번째 요소를 초기값으로 함)

  const BtnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer); // clean up function
    };
  }, [items]);

  return (
    <button type='button' onClick={props.onClick} className={BtnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
};

export default HeaderCartButton;