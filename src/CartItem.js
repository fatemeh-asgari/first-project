import './CartItem.css'

const CartItem = ({title, quantity}) => {
  return <li>
    <section className="cart-item">
      <h3>{title}</h3>
      <h4>{quantity}X</h4>
    </section>
  </li>

};

export default CartItem;