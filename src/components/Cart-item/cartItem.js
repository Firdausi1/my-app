import React, { useState, useEffect, useCallback } from "react";
import "./cartItem.css";
import { BASE_URL } from "../../Path";
import keys from "../../localStorageKeys";
import getValueFromLocalStorage from "../../pages/Menu/useLocalStorage";

function CartItem({}) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("getting cart");
    // usecallBack to avoid unncessary re-renders?
    const url = new URL(BASE_URL + "/api/cart/");
    const anonymous_cart_id = keys.anonymous_cart_id;
    const params = {
      anonymous_cart_id: getValueFromLocalStorage(anonymous_cart_id, null),
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then((r) => r.json())
      .then((data) => console.log(data))
      .then((data) => setCart(data))
      .catch(console.error);
  }, []);

  return (
    <div className="cart">
      <div className="cart-item">
        <img alt="small chop" />
        <div>
          <p>price</p>
          <p>description</p>
        </div>
      </div>
      <div className="cart-total"></div>
    </div>
  );
}

export default CartItem;
