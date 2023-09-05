import React from "react";
import { PRODUCTS } from "../../products";
import Products from "./product";
import "../../App.css";

const Shop = () => {
  return (
    <div className="shop">
      <h1>Tech Shop</h1>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Products key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
