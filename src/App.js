import './App.css';
import {
  AppBar,
  Toolbar,
  Typography
} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie'

function App() {
  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <MovieIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" component="div">
          Movies App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
