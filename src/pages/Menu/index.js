import React, { useEffect, useState } from "react";
import MenuList from "./menuList";
import { BASE_URL } from "../../Path";
import { useLocalStorage } from "./useLocalStorage";
import { store } from "react-notifications-component";
import {
  failedNotification,
  successNotification,
} from "../../notificationConfig";
import keys from "../../localStorageKeys";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./style.css";

function Menu() {
  // console.log("props in menue", props);
  const [products, setProducts] = useState([]);
  const key = keys.anonymous_cart_id;

  useLocalStorage(key, null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const url = BASE_URL + "/api/product/all/";
    const response = await fetch(url);
    const data = await response.json();
    console.log("data");
    setProducts(data[0].product_variation);
  };

  const ShowNotification = (notficationType) => {
    store.addNotification(
      notficationType === "success" ? successNotification : failedNotification
    );
  };

  return (
    <div>
      <ReactNotification />
      <section className="our-menu">
        <h2>Our Menu</h2>
        <div className="Menu">
          {products.map((product) => (
            <MenuList
              name={product.product_type}
              price={product.current_price}
              image={product.product_image}
              itemId={product.id}
              key={product.id}
              itemDesc={product.description}
              handleNotification={ShowNotification}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
