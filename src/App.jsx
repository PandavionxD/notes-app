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

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotasPage />} />
        <Route path="/edit/:id" element={<EditNotasPage />} />
        <Route path="/add" element={<AddNotasPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
