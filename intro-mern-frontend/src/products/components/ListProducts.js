import React, {useState , useEffect} from 'react'
import Loading from './Loading'
import {Button} from 'react-bulma-components'
const ListProducts = () => {
    //UseState nos brinda una variable y una función para modificar su valor inicial
    const [isLoading, setIsLoading] = useState(true)

    //UsseEffect es una función que se ejecuta después de cada renderizado
    useEffect(()=>{
        
        const timeId = setInterval(()=>{
            console.log("Use effects")
            setIsLoading(!isLoading)}
            ,2000)
        return ()=> clearInterval(timeId)
    })

    useEffect(()=>{
        console.log("Only once time")
    },[isLoading])
    return (
        <>
            {
                isLoading 
                ? <Loading/> 
                : 'Mostrar resultado fetch'
            } 
        </>       
    )
}

export default ListProducts