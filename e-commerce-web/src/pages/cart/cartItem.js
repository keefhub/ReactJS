import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import "./cart.css";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <strong>{productName}</strong>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
