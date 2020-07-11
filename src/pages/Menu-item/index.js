import React, {useState, useEffect} from 'react';
import './style.css';
import Item from '../../components/Item/item';

function MenuItem({match}) {
    const[item, setItem] = useState({
      "content": [{}]
    });

    useEffect( ()=>{
      getItem();
    });

    const getItem = async () =>{
          const url = `https://surce-delight.herokuapp.com/api/product/small-chops/${match.params.itemId}/`;
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setItem(data);
    }
    return (
        <section className="menuItemContainer">
                    <Item price={item.price} itemQuantity = {item.content[0].quantity} itemDesc = {item.content[0].add_on_item_name} name={item.product_type} itemId = {item.id} key={item.id}/>
        </section>
    )
}

export default MenuItem;
