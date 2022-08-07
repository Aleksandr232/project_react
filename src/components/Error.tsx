import  {useProducts} from '../hooks/products'

export default function Error(){
    const { error} = useProducts()
    return(
        <p className="text-center text-red-600">{error}</p>
    )
}