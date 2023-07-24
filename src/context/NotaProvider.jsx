import { useState } from "react"
import { notes } from "../fuentes/fuente"
import { NotaContext } from "./NotaContext"

export const NotaProvider = ({children}) => {

  const [notas, setnotas] = useState(notes)

  return (
    <NotaContext.Provider value={{notas,setnotas}} >
        {children}
    </NotaContext.Provider>
  )
}
