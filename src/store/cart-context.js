import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default CartContext;

// const amountReducer = (state, action) => {
//   if (action.type === 'ADDING_AMOUNT') {
//     return { value: val + 1 }
//   }
//   if (action.type === 'DELETING_AMOUNT') {
//     return { value: val - 1 }
//   }
//   return {}
// }

// export const CartContextProvider = (props) => {
//   const [amountState, dispatchAmount] = useReducer(amountReducer, { value: 0, })

//   const addAmountHandler = (e) => {

//   }

//   const deleteAmountHandler = () => {}
// }

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'So happy',
//     description: 'MUST TRY! Happy Salad Club signiture menu [basil pesto dressing]',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Stay Calm',
//     description: '베지테리언도 즐길 수 있는 파스타 샐러드 [유자 오리엔탈 드레싱]',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Feel Better',
//     description: '매콤하게 스트레스 아웃 [크리미 스리라차 드레싱]',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Caesar',
//     description: '고소한 치즈향 가득 시저 샐러드 [시저 드레싱]',
//     price: 18.99,
//   },
// ];

// const CartContext = React.createContext({
//   key: '',
//   name: '',
//   price: '',
//   amount: '',
// })

// export const CartContextProvider = (props) => {
//   const mealsList = DUMMY_MEALS.map((meal) => ({
//     key: meal.id,
//     id: meal.id,
//     name: meal.name,
//     description: meal.description,
//     price: meal.price,
//   }
//   ))

//   return (
//     <CartContext.Provider>
//       {mealsList}
//     </CartContext.Provider>
//   )
// }