import { useProducts } from './hooks/products';
import useModal from './hooks/useModal';
import { Product } from './components/Product';
import { Loader } from './components/Loader';
import Error from './components/Error';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';


function App() {
  const {loading, error, products} = useProducts()
  const {modal, setModal}=useModal()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading &&<Loader/>}
      {error && <Error/>}
      {products.map(product => <Product product={product} key={product.id}/>)}
      {modal && <Modal title='Создать новый продукт'>
          <CreateProduct onCreate={()=>setModal(false)}/>
      </Modal>}
    </div>
    
  );
}

export default App;
