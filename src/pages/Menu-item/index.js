import React, { useState, useEffect } from "react";
import "./style.css";
import Item from "../../components/Item/item";
import { BASE_URL } from "../../Path";

function MenuItem({ match }) {
  const { params } = match;
  const { name, itemId } = params;
  // name and id in match.params.name and match.params.id

  const url = BASE_URL + `/api/product/${name}/${itemId}/`;
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(BASE_URL + `/api/product/${name}/${itemId}/`).then((r) =>
      r.json().then((data) => setItem(data))
    );
  }, []);

  return (
    <section className="menuItemContainer">
      <Item
        price={item.price}
        name={item.product_type}
        itemId={item.id}
        key={item.id}
      />
    </section>
  );
}

export default MenuItem;
