import React, {useEffect, useState} from 'react';
import MenuList from './menuList';
import './style.css';

function Menu(props) {
  console.log(props)
    
  const[products, setProducts] = useState([]);

  useEffect( ()=>{
    getProducts();
  }, []);

  const getProducts = async () =>{
        const url = "https://surce-delight.herokuapp.com/api/product/all/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data[0].product_variation);
    
      }
  
  return (
    <section className="our-menu">
        <h2>Our Menu</h2>
        <div className="Menu">
            {products.map(product => (
                <MenuList name = {product.product_type} price = {product.current_price}  image = {product.product_image}  itemId={product.id} key={product.id} itemDesc = {product.content[0].add_on_item_name} itemQuantity = {product.content[0].quantity}/>
                  
            ))
            }
        </div>
    </section>
  );
}

export default Menu;