import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../../components/Search/Search';
import PetType from '../../components/PetType/PetType';

const apiUrl = "http://localhost:5050";

const Home = () => {

    // const [pets, setPets] = useState([]);
    // const [type, setType] = useState('');
    // const [id, setId] = useState('');

    // useEffect(()=> {
    //     axios
    //         .get('http://localhost:5050/type')
    //         .then(res => {
    //             setPets(res.data)
    //         })
    //         .catch(err => {
    //             console.log('Error')
    //         })
    // }, [])

    // console.log(pets)
    
    return(
        <div>
            {/* <PetType data={pets}/> */}
            <PetType />
            <Search />
        </div>
    )
}

export default Home;