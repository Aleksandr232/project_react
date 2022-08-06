import axios, { Axios, AxiosError } from 'axios';
import React, {useState, useEffect } from 'react';
import { Product } from './components/Product';
import { IProduct } from './module';


function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  async function fetchProducts() {
    try{
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
      setProducts(response.data)
      setLoading(false)
    }catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
   
    
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading &&<p className="text-center">Загрузка....</p>}
      {error &&<p className="text-center text-red-600">{error}</p>}
      {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
    
  );
}

export default App;
