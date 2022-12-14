import React, {useState} from "react"
import {IProduct} from '../module'

 interface ProductProps{
    product: IProduct
 }

export function Product({product}: ProductProps) {
    const [snow, setSnow]=useState(false)

    

    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">
               {product.price}
            </p>
            <button onClick={()=>setSnow(prev=>!prev)} className="py-2 px-4 border bg-yellow-400">{snow ? "Скрыть" : "Показать"}</button>
             {snow && <div>
                <p>{product.description}</p>
                <p>Рейтинг:<span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}