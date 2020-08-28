import { useState, useEffect } from "react";
import { BASE_URL } from "../../Path";

const getValueFromLocalStorage = (key, initialState) => {
  // attemps to get value from local storage or returns null
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return initialState;
};

export const useLocalStorage = (key, initialState) => {
  useEffect(() => {
    if (getValueFromLocalStorage(key, initialState) === initialState) {
      // on initial load of page, store anonymous cart id in local storage
      fetch(BASE_URL + "/api/cart/create-empty-cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((r) => r.json())
        .then((data) => data.cart_id)
        .then((cart_id) => localStorage.setItem(key, JSON.stringify(cart_id)));
    }
  }, [key, initialState]);
};

export default getValueFromLocalStorage;
