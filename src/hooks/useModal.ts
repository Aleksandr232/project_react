import React,{useState} from "react";



export default function useModal(){
    const [modal, setModal] = useState(true)

    return {modal, setModal}
}