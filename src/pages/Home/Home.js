import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../../components/Search/Search';
import PetCard from '../../components/PetCard/PetCard';

const apiUrl = "http://localhost:5050";

const Home = () => {
    
    return(
        <div>
            {/* <PetCard /> */}
            <Search />
        </div>
    )
}

export default Home;