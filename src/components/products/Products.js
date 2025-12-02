import React from "react";
import { useSelector } from "react-redux";
import Product from "../product/Product";

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log("list of products", products);
  return (
    <div>
      <h1>Products</h1>
      {products &&
        products.map((p, index) => {
          return (
            <Product
              key={index}
              id={p.id}
              name={p.name}
              picture={p.picture}
              price={p.price}
            />
          );
        })}
    </div>
  );
};

export default Products;
