import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../Path";
import { slugify } from "../../Utils";
import { notificationType } from "../../notificationConfig";

import "./style.css";
import getValueFromLocalStorage from "./useLocalStorage";
import keys from "../../localStorageKeys";

function MenuList({ name, itemDesc, price, itemId, handleNotification }) {
  name = slugify(name);

  const Submit = (e) => {
    e.preventDefault();

    let info = {
      product: itemId,
      quantity: 1,
      anonymous_cart_id: getValueFromLocalStorage(keys.anonymous_cart_id, null),
    };

    fetch(BASE_URL + "/api/cart/item/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((r) => {
      // display alert that shows item was added to cart or already exists
      r.ok
        ? handleNotification(notificationType.sucessMessage)
        : handleNotification(notificationType.failedMessage);
    });
  };

  return (
    <div className="ourMenu-list">
      <div className="Menu-box">
        <div className="Menu-img">
          <Link className="link" to={`/menu/${name}/${itemId}`}>
            <img
              src="./4C9E43EF-FD5D-4A3E-80E6-32C05E01B80C.jpeg"
              alt="small chop"
            />
          </Link>
        </div>
        <div className="Menu-content">
          <div className="Menu-text">
            <h4>{name} </h4>
            <p>{itemDesc}</p>
          </div>
          <div className="Menu-price">
            <h5>#{price}</h5>
            <form>
              <button className="btn-link" onClick={(e) => Submit(e)}>
                add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
