import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Products = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <strong> {productName}</strong>
        <p>${price}</p>
      </div>
      <button className="addToCart" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Products;
