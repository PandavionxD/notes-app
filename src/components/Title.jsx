import { Box, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useEffect, useState } from "react";
import { NotaContext } from "../context/NotaContext";
import CloseIcon from "@mui/icons-material/Close";

export const Title = () => {
  const { notas, setnotas, notes, setnotes } = useContext(NotaContext);

  const [search, setsearch] = useState(false);
  const [value, setvalue] = useState("");
  const [filter, setfilter] = useState(notas);

  const handleSearch = () => {
    if (value.length === 0) {
      setnotes([...notas]);
    } else {
      setnotes(
        notas.filter((nota) => {
          const item = nota.title.toLowerCase().trim();
          return item.includes(value.toLowerCase().trim());
        })
      );
    }
  };

  useEffect(handleSearch, [value]);

  return (
    <>
      <Box display="flex" py={2}>
        {!search ? (
          <Typography
            flexGrow={1}
            variant="h3"
            component="h1"
            color="white.main"
          >
            Notes App
          </Typography>
        ) : (
          <TextField
            onChange={(e) => {
              setvalue(e.target.value), handleSearch();
            }}
            autoFocus
            id="Nota"
            name="nota"
            label="Nota"
            variant="standard"
            size="small"
            sx={{
              display: "flex",
              flexGrow: 1,
            }}
            color="white"
          />
        )}
        <IconButton
          type="button"
          onClick={() => setsearch((prevState) => !prevState)}
          size="small"
          color="white"
        >
          {search ? (
            <CloseIcon
              sx={{
                fontSize: 42,
              }}
            />
          ) : (
            <SearchIcon
              sx={{
                fontSize: 42,
              }}
            />
          )}
        </IconButton>
      </Box>
      {notas.length === 0 && (
        <Typography color="white.main" textAlign='center' mt={2} variant="h6" component='h2' >
          Crear alguna nota para comenzar.
        </Typography>
      )}
    </>
  );
};
