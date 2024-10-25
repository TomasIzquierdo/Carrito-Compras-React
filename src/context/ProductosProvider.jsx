import { ProductosContext } from "./ProductosContext"
import { useEffect, useState } from "react"


 // eslint-disable-next-line react/prop-types
 export const ProductosProvider = ({children})=>
    {
        const urlBase = "https://fakestoreapi.com/products"

        const [productos, SetProductos] = useState ([])
    
        const fetchProductos = async ()=>{
            const response = await fetch(urlBase)
            const data = await response.json()
            console.log(data)
            SetProductos(data)
         }
    
        useEffect(()=>{
            fetchProductos()
    
        },[])

        return (
            <ProductosContext.Provider value={{productos}}>
                {children}
            </ProductosContext.Provider>
        )

    }