import { createStore } from "redux";

const cartReducer = (state = { cartItems: [] }, action) => {
  if (action.type === "addItem") {
    const newCartArray = [...state.cartItems];
    const existingItem = state.cartItems.find(
      (item) => item.id === action.cartInfo.id
    );
    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;
      for (let item in newCartArray) {
        if (item.id === existingItem.id) {
          const itemToBeModified = newCartArray.findIndex((item) => item.id === action.cartInfo.id)
          newCartArray[itemToBeModified].quantity = newQuantity;
        }
      }
    }
    if (!existingItem) {
      newCartArray.push({
        id: action.cartInfo.id,
        title: action.cartInfo.title,
        quantity: 1,
      });
    }
    state = {cartItems: [...newCartArray]};
  }
};

const store = createStore(cartReducer);

export default store;
