import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from '../PetCard/PetCard';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5050/pets`)
            .then(res => {
                setResults(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [term]);

const renderedList = results.filter(result => result.type===term || result.name===term || result.age===term);

    return(
        <div>
            <PetCard data={results}/>
            <div className="ui form">
                <div className="field">
                    {/* <label>Enter Search Term</label> */}
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        type='text' 
                        className='input'
                        placeholder='Search Kitten, Puppy etc.' 
                    />
                </div>
            </div>
            <div>
                <div>
                    {
                        renderedList.map(pet => 
                            <div key={pet.id}>
                                <img alt='i' src={pet.image}></img>
                                <h2>{pet.name}</h2>
                                <div>{pet.type}</div>
                                <div>{pet.sex}</div>
                                <div>{pet.age}</div>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search;