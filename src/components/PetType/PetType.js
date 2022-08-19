import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { type } from '@testing-library/user-event/dist/type';
import PetCard from '../PetCard/PetCard';

const PetType = () => {

    // const [results, setResults] = useState([]);
    const [type, setType] = useState([]);
    const [petType, setPetType] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:5050/pets')
    //         .then(res => {
    //             console.log(res.data)
    //             setResults(res.data)
    //         })
    //         .catch(err => {
    //             console.log('Error')
    //         })
    // }, []);
    useEffect(()=> {
        axios
            .get('http://localhost:5050/type')
            .then(res => {
                setType(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [])

    // console.log(results)
    // const petList = props.data
    console.log(type)

    return (
        <div>
            {type.map(pet => 
                <button onClick={e => setPetType(pet.type)}>{pet.type}</button>
            )}
            {/* {petList.map(pet => 
            <button onClick={e => setType(pet.type)} key={pet.id}>
                {pet.type}
            </button>
            )} */}
            {petType !== '' && <PetCard data={petType}/>}
        </div>
    )
};

export default PetType;