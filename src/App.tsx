import { useProducts } from './hooks/products';
import { Product } from './components/Product';



function App() {
  const {loading, error, products} = useProducts()
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading &&<p className="text-center">Загрузка....</p>}
      {error &&<p className="text-center text-red-600">{error}</p>}
      {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
    
  );
}

export default App;
