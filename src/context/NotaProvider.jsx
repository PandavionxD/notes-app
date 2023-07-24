import { useEffect, useState } from "react";
import { notes } from "../fuentes/fuente";
import { NotaContext } from "./NotaContext";

export const NotaProvider = ({ children }) => {
  const [notas, setnotas] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  const [notes, setnotes] = useState([])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notas))
  },[notas])


  return (
    <NotaContext.Provider value={{ notas, setnotas, notes , setnotes }}>
      {children}
    </NotaContext.Provider>
  );
};
