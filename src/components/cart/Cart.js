import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart_item/CartItem";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    console.log("cart in cart", cart);
  }, [cart]);

  return (
    <div>
      <h1>Cart</h1>
      {cart.cart_products.map((cartItem, index) => {
        let k = `cart-item` + index;
        return <CartItem key={k} cartItem={cartItem} />;
      })}
      <h1>${cart.total}</h1>
    </div>
  );
};

export default Cart;
