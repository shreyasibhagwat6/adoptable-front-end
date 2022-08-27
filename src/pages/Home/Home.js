import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../../components/Search/Search';
import PetType from '../../components/PetType/PetType';
import { FavProvider } from '../../Context/FavContext';

const apiUrl = "http://localhost:5050";

const Home = () => {
    
    return(
        <FavProvider>
            <div>
                <PetType />
                <Search />
            </div>
        </FavProvider>
    )
}

export default Home;