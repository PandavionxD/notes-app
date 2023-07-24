import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NotaItem = ({ id, title='', description, date }) => {
  
  const url = `/edit/${id}`
  
  return (
    <Grid item xs={12} sm={6} sx={{
      position:'relative'
    }} >
      <Link className="ref"
      to={url}
      >
      <Paper
        sx={{
          color: "white.main",
          bgcolor: "primary.main",
          minHeight: 70,
          padding:1,
          textDecoration:'none',
        }}
        >
          <Typography variant="body2" component='h2'  sx={{
            listStyle:'none'
            
          }} >
            {title.length>15 ? title.substring(0,20)+' ...' : title  }
          </Typography>

          <Typography variant="overline" sx={{
            position:'absolute',
            bottom:-5,
            left:30
          }} >
            {date}
          </Typography>
      </Paper>
        </Link>
    </Grid>
  );
};
