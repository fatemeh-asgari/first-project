import ProductItem from "./ProductItem";

import "./Products.css";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "The First Product" },
  { id: "p2", title: "The Second Product" },
  { id: "p3", title: "The Third Product" },
];

const Products = () => {
  return (
    <ul class='products-list'>
      {DUMMY_PRODUCTS.map((product) => (
        <ProductItem key={product.id} id={product.id} title={product.title} />
      ))}
    </ul>
  );
};

export default Products;
