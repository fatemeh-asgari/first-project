import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  if(cartItems.length !== 0){
    return (
    <section className="card">
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} title={item.title} quantity={item.quantity} />
        ))}
      </ul>
    </section>
  );
  }else{
    return(
      <section className="card">
        <h3>Cart is empty!</h3>
      </section>
    ) 
  }

  
};

export default Cart;