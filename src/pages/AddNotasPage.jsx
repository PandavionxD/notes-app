import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useContext, useState } from "react";
import { useGetDate } from "../hooks/useGetDate";
import { v4 } from "uuid";
import { NotaContext } from "../context/NotaContext";
import { useSnackbar } from "notistack";

export const AddNotasPage = () => {
  const { notas, setnotas } = useContext(NotaContext);

  const date = useGetDate();

  const {enqueueSnackbar} = useSnackbar()

  const OpenSnack=(valor)=>{
    enqueueSnackbar(`${valor} `, {
      variant: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  }

  const [form, setform] = useState({
    title: "",
    description: "",
  });

  const ValueForm = ({ target }) => {
    const { value, name } = target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const FormSubmit = (e) => {
    e.preventDefault();
    const { title, description } = form;
    if (
      (form.title.toLowerCase().trim().length &&
        form.description.toLowerCase().trim().length) === 0
    )
      return;
    const value_v1 = {
      title,
      description,
      date,
      id: v4(),
    };
    const notasv1 = [...notas];
    notasv1.push(value_v1);
    setnotas(notasv1);
    navigate("/");
    OpenSnack('Nota Agregada')
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="white.main" py={2} variant="h5" component="h2">
          Agregar
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
      <form onSubmit={FormSubmit}>
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
              onChange={ValueForm}
              value={form.title}
            />
            <Grid item mt={2}>
              <textarea
                rows={15}
                placeholder="Ingresa aquí la descripción..."
                className="tarea"
                name="description"
                value={form.description}
                onChange={ValueForm}
              ></textarea>
            </Grid>

            <Grid container mt={1} spacing={2}>
              <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
