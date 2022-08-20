import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import PetCard from '../PetCard/PetCard';

const PetType = () => {

    const [info, setInfo] = useState([]);
    const [petType, setPetType] = useState('')

    useEffect(()=> {
        axios
            .get('http://localhost:5050/type')
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [])

    console.log(info)
    

    return (
        <div>
            {info.map(pet => {
                return (
                    <div>
                        <Link to={`/pets/gallery/${pet.type}`}>
                            <button onClick={e => setPetType(pet.type)}>{pet.type}</button>
                        </Link>
                    </div>
                )
            })}
            {petType !== '' && <PetCard />}
        </div>
    )
};

export default PetType;