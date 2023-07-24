import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export const AddNotasPage = () => {
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
          <Typography variant="h5">Atrás</Typography>
        </IconButton>
      </Box>
      <form>
        <Grid container>
          <Grid item xs={12} color="white">
            <TextField
              id="titulo"
              label="Título"
              focused
              variant="outlined"
              color="white"
              fullWidth
              placeholder="Ingresa aqui un título"
            />
            <Grid item mt={2}>
              <textarea
                rows={10}
                placeholder="Ingresa aquí la descripción..."
                className="tarea"
              ></textarea>
            </Grid>

            <Grid container mt={1} spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    height: 40,
                  }}
                >
                  Guardar
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="button"
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
