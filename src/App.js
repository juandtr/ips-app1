import { Fragment } from 'react';
import './App.css';
import Navbars from './components/Nav/NavBar';
import Home from './components/pages.js/Home';
import Cita from './components/cita/Cita'
import Footer from './components/footer/Footer'


function App() {
  return (
    <Fragment>
        <Navbars/>
        <Home/>
        <Cita/>
        <Footer/>
    </Fragment>
    
  );
}

export default App;
