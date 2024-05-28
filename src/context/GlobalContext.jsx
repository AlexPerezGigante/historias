import { createContext, useState } from "react";
import { useEffect } from "react"


// creamos el contexto (la bolsa donde meter los estados)
export const GlobalContext = createContext()



// creamos el proveedor del contexto 

export function GlobalContextProvider({ children }){

    const [historias, setHistorias] = useState(0)


    return(
        <GlobalContext.Provider value={{
            historias, setHistorias,
        }}>
            {children}
        </GlobalContext.Provider>
    )

}