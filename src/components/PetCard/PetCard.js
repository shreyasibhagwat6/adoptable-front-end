import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import PetDetails from '../PetDetails/PetDetails';
import './PetCard.scss';

const PetCard = (props) => {

    const [results, setResults] = useState([]);
    const [details, setDetails] = useState('');

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
    const petType = props.data;

    const filteredPets = results.filter(pet => pet.type === petType);
    console.log(filteredPets);

    return (
            <div>
                {filteredPets.map(pet => {
                    return(
                        <div>
                            <Link to={`/pets/${pet.id}`}>
                                <div onClick={e => setDetails(pet.id)}>
                                    <img className='img' alt='' src={`http://localhost:5050/${pet.image}`}></img>
                                    <h2>{pet.name}</h2>
                                    <p>{pet.breed}</p>
                                    <p>{pet.sex}</p>
                                    <p>{pet.age}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
                {details !== '' && <PetDetails id={details}/>}
            </div>
    )
}

export default PetCard;