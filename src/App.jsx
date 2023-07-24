import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { NotasPage } from "./pages/NotasPage";
import { EditNotasPage } from "./pages/EditNotasPage";
import { AddNotasPage } from "./pages/AddNotasPage";
import { Box, Container } from "@mui/material";
import { NotaProvider } from "./context/NotaProvider";
import './estilosGlobal.css'
import { SnackbarProvider } from "notistack";


export const App = () => {
  return (
    <SnackbarProvider autoHideDuration={3000} maxSnack={3}  >
    <NotaProvider>
      <Box width="100%" minHeight="100vh" bgcolor="background.main" mt={0}>
        <Container maxWidth="sm">
          <Router>
            <Routes>
              <Route path="/" element={<NotasPage />} />
              <Route path="/edit/:id" element={<EditNotasPage />} />
              <Route path="/add" element={<AddNotasPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </Container>
      </Box>
    </NotaProvider>
    </SnackbarProvider>
  );
};
