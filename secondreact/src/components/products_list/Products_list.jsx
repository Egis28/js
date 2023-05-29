import React, {useState, useEffect } from 'react';
import Product_card from '../product/Product_card';

import productsService from '../../services/ProductsServices';
import styles from './Products_list.module.css';
import Category_list from '../category/Category_list';



const Product_list = () => {
  //1 top state - kur desiu gautus duomenis

  const [products, setProducts] = useState([]);

  //2 gautus duomenis uzsetinti i state
  const getProducts = ()=> {
    productsService().then((data)=>{
      setProducts(data);
    })
    
  }


  //3 useEffect pakvies funkcija, kuri gaunant duomenis is api ir juos uzsetina i state
useEffect(() => {
 getProducts();

}, []);

// console.log(products);

  return (
    <div>

        <Product_card products={products}/>
        <Category_list products={products}/>
    </div>
  )
}

export default Product_list