import './App.css';
import Navbar from './Components/Navbar'
import Movies from './Components/Movies';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Movies />
    </Fragment>
  );
}

export default App;
