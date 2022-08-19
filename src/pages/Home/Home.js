import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../../components/Search/Search';
import PetType from '../../components/PetType/PetType';

const apiUrl = "http://localhost:5050";

const Home = () => {
    
    return(
        <div>
            <PetType />
            <Search />
        </div>
    )
}

export default Home;