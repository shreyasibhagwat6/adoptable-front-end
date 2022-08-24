import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../../components/Search/Search';
import PetType from '../../components/PetType/PetType';
import NavBar from '../../components/NavBar/NavBar';
import { FavProvider } from '../../context/FavContext';

const apiUrl = "http://localhost:5050";

const Home = () => {
    
    return(
        <FavProvider>
            <div>
                <NavBar />
                <PetType />
                <Search />
            </div>
        </FavProvider>
    )
}

export default Home;