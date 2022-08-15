import React, { useState } from 'react';
import axios from 'axios';
import Search from '../../components/Search/Search';

const apiUrl = "http://localhost:5050";

const Home = () => {
    const {searchTerm, setSearchTerm} = useState('');
    return(
        <div>
            <Search />
        </div>
    )
}

export default Home;