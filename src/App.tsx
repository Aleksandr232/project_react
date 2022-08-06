import axios from 'axios';
import React, { useEffect } from 'react';
import { Product } from './components/Product';
import { products } from './data/product';
import { IProduct } from './module';


function App() {

  async function fetchProducts() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
    console.log(response)
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
    
  );
}

export default App;
