import { Grid } from "@mui/material"
import { NotaItem } from "./NotaItem"

export const NotaList = ({notas=[]}) => {
  return (
    <Grid container spacing={3} >
    {notas.map((nota,id)=>(
      <NotaItem key={id} {...nota} />
    ))}
    </Grid>
  )
}
