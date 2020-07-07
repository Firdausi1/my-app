import React, {useState, useEffect} from 'react';
import TopPickList from './topPickList';
import './topPick.css';

function TopPick() {
    let[products, setProducts] = useState([]);

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
    
    const index= products.map((product) => (
        <TopPickList  name = {product.product_type} price = {product.current_price} desc = {product.description} itemId={product.id} key={product.id}/>
    ))
    let rows = [];
    for(let i=0; i < 4; i++){
        rows.push(index[i])
    }
    console.log(rows)

    return (
        <div className="top">
            <div className="top-heading">
                <h2>OUR TOP PICKS</h2>
                <a className="btn-link"> View all</a>
            </div>
            <section className="top-picks">
                { rows.map(row => (
                    row
                ))}
            </section>
        </div>
    );
}

export default TopPick;