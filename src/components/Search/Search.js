import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from '../PetCard/PetCard';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

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
        <div>
            <div>
                <div>
                    {
                        renderedList.map(pet => 
                            <div key={pet.id}>
                                <img alt='i' src={pet.image} />
                                <h2>{pet.name}</h2>
                                <p>{pet.type}</p>
                                <p>{pet.sex}</p>
                                <p>{pet.age}</p>
                            </div>
                    )}
                </div>
            </div>
            <div>
                <div>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        type='text' 
                        className='input'
                        placeholder='Search Kitten, Puppy etc.' 
                    />
                </div>
            </div>
        </div>
    )
};

export default Search;