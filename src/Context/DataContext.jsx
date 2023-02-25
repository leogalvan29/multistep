import { createContext, useEffect, useState } from "react"; 
export const datosOrdenContext = createContext() 

const OrdenProvider = ({children}) => {
    const saludo = "hola"
    const [orden, setOrden] = useState([])
    const [usuario,setUsuario] = useState([])
    const [error,setError] = useState(false)
    return(
        <datosOrdenContext.Provider value={{
              saludo,
              error, 
              setError,
              usuario,
              setUsuario,
              orden, 
              setOrden
        }}>
        {children}
        </datosOrdenContext.Provider>
    )
}

export default OrdenProvider