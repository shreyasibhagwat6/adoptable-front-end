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
import FavList from './components/FavList/FavList';
import Message from './components/Message/Message';
import './App.css';

function App() {

  return(
    <div>
        <BrowserRouter>
          <Header />
          {/* <Switch> */}
            <Route exact path="/" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/home" component={ Home }/>
            <Route exact path="/pets/gallery/:petsType" component={ PetCard } />
            <Route exact path="/pets/:petId" component={ PetDetails } />
            <Route path="/favourites" component={ FavList } />
            <Route path="/messages" component={ Message } />
          {/* </Switch>   */}
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App;
