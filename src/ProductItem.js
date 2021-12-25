import { useDispatch } from "react-redux";

import "./ProductItem.css";

const ProductItem = ({ title, id }) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch({
      type: "addItem",
      action: { cartInfo: { title: title, id: id } },
    });
  };

  return (
    <li>
      <section className="item" onClick={addItemToCartHandler}>
        <h3 className="item__title">{title}</h3>
      </section>
    </li>
  );
};

export default ProductItem;
