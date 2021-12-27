import { createStore } from "redux";

const cartReducer = (state = { cartItems: [] }, action) => {
  if (action.type === "addItem") {
    const existingItem = state.cartItems.find(
      (item) => item.id === action.cartInfo.id
    );
    if (existingItem) {
      const newCartArray = [];
      const newQuantity = existingItem.quantity + 1;
      for (let item of state.cartItems) {
        if (item.id !== existingItem.id) {
          newCartArray.push(item);
        } else {
          newCartArray.push({
            id: action.cartInfo.id,
            title: action.cartInfo.title,
            quantity: newQuantity,
          });
        }
      }
      state = { cartItems: [...newCartArray] };
    } else {
      const newCartArray = [...state.cartItems];
      newCartArray.push({
        id: action.cartInfo.id,
        title: action.cartInfo.title,
        quantity: 1,
      });
      state = { cartItems: [...newCartArray] };
    }
  }
  return state;
};

const store = createStore(cartReducer);

export default store;
