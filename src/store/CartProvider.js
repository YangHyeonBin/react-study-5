import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
}; // cartReducer 함수가 리턴할 기본 state

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; // 이미 담긴 메뉴든 아니든 필요한 과정
    
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex]; // 배열 인덱스 이용

    let updatedItems;

    if (existingCartItem) { // 이미 존재한다면,
      const updatedItem = {
        ...existingCartItem, // 이미 있던 그 녀석을 그대로 복사
        amount: existingCartItem.amount + action.item.amount, // 해당 액션에 의해 추가된 수량만 추가해줌 = 수정 끝
      };
      updatedItems = [...state.items]; // 복사해 새로운 배열로 저장 // 위 과정 거치면 state가 새로 업데이트 되나? state.items를 쓰는 게 이해 안 됨
      updatedItems[existingCartItemIndex] = updatedItem; // updatedItem이 배열에 새로 추가되지 않게, 해당 인덱스인 요소를 updatedItem(=추가한 만큼 수량이 추가된, 수정된 요소)으로 덮어씀
    } else {
      // updatedItem = { ...action.item }; // 해당 action으로 받은 item을 그냥 복사
      updatedItems = state.items.concat(action.item);
    }
    
    return { 
      items: updatedItems, // if, else 어느 경우든 items 배열을 updatedItems 배열로, 최신 상태 반환
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.id // REMOVE 액션에는 item이 아니라 id를 전달하고 있음
    );
    const existingCartItem = state.items[existingCartItemIndex]; // add와 같은 로직
    const updatedTotalAmount = state.totalAmount - existingCartItem.price; // - 버튼 누르면 무조건 하나씩 빠지므로 그 가격만 뺌

    let updatedItems;

    if (existingCartItem.amount === 1) { // 하나 남은 상태에서 - 버튼 누르면 배열에서 그 아이템 자체를 없애야 함
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else { // 배열에서 삭제 X, 수량만 업데이트
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item }); // Reducer 함수에게 지금 인자로 받은 item을 item이란 이름으로, action type ADD와 함께 전달
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
