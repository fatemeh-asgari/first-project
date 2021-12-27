import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const isCartEmpty = cartItems.length !== 0;

  return (
    <section className="card">
      {isCartEmpty ? (
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              quantity={item.quantity}
            />
          ))}
        </ul>
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </section>
  );
};

export default Cart;