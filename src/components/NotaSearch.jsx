import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
export const NotaSearch = () => {
  
  return (
    <Link to='/add' >
    <IconButton
      size="small"
      color="white"
      sx={{
          bgcolor: {
              xs:purple[900],
            sm:'primary.main'
        },
        position: "fixed",
        bottom: 30,
        right: 30,
      }}
    >
      <AddIcon
        sx={{
            fontSize: 40,
            fontWeight: 700,
        }}
        />
    </IconButton>
        </Link>
  );
};
