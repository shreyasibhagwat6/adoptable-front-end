import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import PetCard from '../PetCard/PetCard';
import PetDetails from '../PetDetails/PetDetails';
import './Search.scss'

const Search = () => {
    const [term, setTerm] = useState('');
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
    }, [term]);

const newTerm = term.charAt(0).toUpperCase() + term.slice(1);
const renderedList = results.filter(result => result.type===newTerm || result.name===newTerm|| result.age===newTerm);

    return(
            <div className='search'>
                <div>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        type='text' 
                        className='input'
                        placeholder='Search Kitten, Puppy etc.' 
                    />
                </div>
                <div>
                    {renderedList.map(pet => {
                        return(
                            <div key={pet.id}>
                                <Link to={`/pets/${pet.id}`}>
                                    <div onClick={e => {setDetails(pet.id)}} key={pet.id}>
                                        <img alt='i'className='img' src={`http://localhost:5050/${pet.image}`} />
                                        <h2>{pet.name}</h2>
                                        <p>{pet.type}</p>
                                        <p>{pet.sex}</p>
                                        <p>{pet.age}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    )}
                </div>
            {details !== '' && <PetDetails id={details}/>}
        </div>
    )
};

export default Search;