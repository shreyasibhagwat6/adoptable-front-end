import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { type } from '@testing-library/user-event/dist/type';
import PetCard from '../PetCard/PetCard';

const PetType = (props) => {

    const [results, setResults] = useState([]);
    const [type, setType] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5050/pets')
            .then(res => {
                console.log(res.data)
                setResults(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, []);

    console.log(results)
    const petList = props.data
    console.log(type)

    return (
        <div>
            {petList.map(pet => 
            <button onClick={e => setType(pet.type)} key={pet.id}>
                {pet.type}
            </button>
            )}
            {type !== '' && <PetCard data={type} petList={results}/>}
        </div>
    )
};

export default PetType;