import { Box, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Title = () => {
  return (
    <Box display="flex" py={2}>
      <Typography flexGrow={1} variant="h3" component="h1" color="white.main">
        Notes App
      </Typography>
      {/* <TextField id="nota" label='nota' variant="standard" color="white" /> */}
        
      <IconButton size="small" color="white">
        <SearchIcon
          sx={{
            fontSize: 42,
          }}
        />
      </IconButton>
    </Box>
  );
};
