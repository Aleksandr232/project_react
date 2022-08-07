import React,{useState} from "react";


export function CreateProduct(){
   const [value, setValue]=useState('')

    const sumitHandler=(event: React.FormEvent) =>{
        event.preventDefault()
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

             <button  className="py-2 px-4 border bg-yellow-400">Создать</button>
        </form>
    )
}