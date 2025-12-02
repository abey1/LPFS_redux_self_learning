import React from "react";

const CartItem = ({ cartItem }) => {
  console.log("my cart item", cartItem);
  return (
    <div className="cart-card">
      <img className="product_img" src={cartItem.picture} alt="Product Image" />
      <div className="cart-card-details">
        <h3>{cartItem.name}</h3>
        <p>
          Quantity: <span className="quantity">{cartItem.quantity}</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
