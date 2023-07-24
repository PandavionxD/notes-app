import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useContext, useState } from "react";
import { NotaContext } from "../context/NotaContext";
import { useGetDate } from "../hooks/useGetDate";

export const EditNotasPage = () => {
  const { notas, setnotas } = useContext(NotaContext);
  const { id } = useParams();
  const nota = notas.find((nota) => {
    return nota.id == id;
  });

  const date = useGetDate();

  const navigate = useNavigate();

  const { title, description } = nota;

  const [valor, setvalor] = useState({
    title,
    description,
  });

  const changeValue = ({ target }) => {
    const { name, value } = target;
    setvalor({
      ...valor,
      [name]: value,
    });
  };

  const EditarValue = (e) => {
    e.preventDefault();
    const { title, description } = valor;
    if (title && description) {
      const newNote = { ...valor, title, description, id, date };
      const newNotes = notas.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setnotas(newNotes);
      navigate("/");
    }
  };

  const deleteValue = ()=>{
    const newNotes= notas.filter(item=>item.id !==id)
    setnotas(newNotes)
    navigate('/')
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="white.main" py={2} variant="h5" component="h2">
          Editar
        </Typography>
        <IconButton color="white" component={Link} to="/">
          <NavigateBeforeIcon
            sx={{
              fontSize: 40,
              fontWeight: "bolder",
            }}
          />
          <Typography variant="h6">Atrás</Typography>
        </IconButton>
      </Box>
      <form onSubmit={EditarValue}>
        <Grid container>
          <Grid item xs={12} color="white">
            <TextField
              id="Título"
              label="Título"
              name="title"
              focused
              variant="outlined"
              color="white"
              fullWidth
              placeholder="Ingresa aqui un título"
              onChange={changeValue}
              value={valor.title}
            />
            <Grid item mt={2}>
              <textarea
                rows={15}
                placeholder="Ingresa aquí la descripción..."
                className="tarea"
                name="description"
                onChange={changeValue}
                value={valor.description}
              ></textarea>
            </Grid>

            <Grid container mt={1} spacing={2}>
              <Grid item xs={6} s>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    height: 40,
                  }}
                >
                  Guardar
                </Button>
              </Grid>
              <Grid item xs={6} >
                <Button
                  type="button"
                  onClick={deleteValue}
                  fullWidth
                  variant="contained"
                  color="error"
                  sx={{
                    height: 40,
                  }}
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
