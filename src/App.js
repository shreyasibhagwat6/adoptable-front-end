import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Home from './pages/Home/Home';
import PetCard from './components/PetCard/PetCard';
import PetDetails from './components/PetDetails/PetDetails';
import './App.css';
import PetType from './components/PetType/PetType';

function App() {

  return(
    <div>
        <BrowserRouter>
          <Header />
            <Route exact path="/" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/home" component={ Home }/>
            {/* <Route path="/pets" component={ PetCard } /> */}
            <Route path="/pets/:petId" component={ PetDetails } />
          {/* <Footer /> */}
        </BrowserRouter>
    </div>
  )
}

export default App;
