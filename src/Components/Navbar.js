import {
  AppBar,
  Toolbar,
  Typography,
  Chip
} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie'

export function Navbar() {

  const date = new Date();
  const formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  const applicantName = 'Ignacio Morel Pujols'

  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <MovieIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" component="div">
          Movies App
        </Typography>
        <Chip label={`${applicantName} ${formatedDate}`} color='info' sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
