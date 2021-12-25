import "./ProductItem.css";

const ProductItem = ({title, id}) => {
  return(
    <li >
      <section className="item">
        <h3 className="item__title">{title}</h3>
      </section>
    </li>
  )
};

export default ProductItem;
