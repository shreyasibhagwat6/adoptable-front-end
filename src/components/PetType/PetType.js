import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import PetCard from '../PetCard/PetCard';

const PetType = () => {

    const [type, setType] = useState([]);
    const [petType, setPetType] = useState('')

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

    console.log(type)

    return (
        <div>
            {type.map(pet => {
                return (
                    <div>
                        <Link to={`/pets/${pet.type}`}>
                            <button onClick={e => setPetType(pet.type)}>{pet.type}</button>
                        </Link>
                    </div>
                )
            })}
            {petType !== '' && <PetCard data={petType}/>}
        </div>
    )
};

export default PetType;