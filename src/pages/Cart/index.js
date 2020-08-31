import React, { useEffect, useState } from "react";
import "./cart.css";
import CartItem from "../../components/Cart-item/cartItem";

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    
  },[]);

  return (
    <section className="cart-container">
      <div className="cart-heading">
        <h3 className="cart-title">CART</h3>
        <h3 className="total-title">TOTAL</h3>
      </div>
      <CartItem />
    </section>
  );
}

export default Cart;
