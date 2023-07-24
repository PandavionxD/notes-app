import { useContext } from "react";
import { Title } from "../components/Title";
import { NotaContext } from "../context/NotaContext";
import { NotaList } from "../components/NotaList";
import { NotaSearch } from "../components/NotaSearch";

export const NotasPage = () => {
  const { notas } = useContext(NotaContext);
  console.log(notas);
  return(
    <>
    <Title/>
    <NotaList notas={notas}  />
    <NotaSearch/>
    </>
  )
};
