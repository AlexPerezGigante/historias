import { createContext, useState } from "react";
import { useEffect } from "react"


// creamos el contexto (la bolsa donde meter los estados)
export const GlobalContext = createContext()



// creamos el proveedor del contexto 

export function GlobalContextProvider({ children }){

    const [historias, setHistorias] = useState([])
    const [dataHistoria, setDataHistoria] = useState({
        id: '',
        titulo: '',
        experiencia: '',
        comentario: '',
        imagen: '',
        fecha: ''
    })


    return(
        <GlobalContext.Provider value={{
            historias, setHistorias,
            dataHistoria, setDataHistoria
        }}>
            {children}
        </GlobalContext.Provider>
    )

}