import React,{useState} from "react";
import {IProduct} from "../module";
import  axios  from "axios";
import Error from "./Error";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 42,
        count: 10
    }
   }

   

  interface CreateProductProps{
    onCreate: ()=>void
  }

export function CreateProduct({onCreate}:CreateProductProps){
   const [value, setValue]=useState('')
   const [error, setError]=useState('')

   

    const sumitHandler = async(event: React.FormEvent) =>{
        event.preventDefault()
        setError('')

        if(value.trim().length === 0){
            setError('Пожалуйста ')
            return
        }


       productData.title = value
       const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

       onCreate()

    }

    const changeHandler=(event: React.KeyboardEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }

    return(
        <form onSubmit={sumitHandler}>
            <input
             type="text"
             className="border py-4 px-4 mb-2 w-full outline-0"
             placeholder="Введите"
             value={value}
             onChange={changeHandler}
             />

            {error && <Error/>}

             <button  type="button" className="py-2 px-4 border bg-yellow-400">Создать</button>
        </form>
    )
}