import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    // console.log(results);
    // console.log(term);

    useEffect(() => {
        axios.get(`http://localhost:5050/pets`)
            .then(res => {
                setResults(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [term]);
// console.log(results)
const renderedList = results.filter(result => result.type===term || result.name===term);
// console.log(renderedList)

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        type='text' 
                        className='input' 
                    />
                </div>
            </div>
            <div>
                <ul>
                    {
                        renderedList.map(pet => 
                            <div>
                                <li key={pet.id}>{pet.name}</li>
                                <li>{pet.type}</li>
                                <li>{pet.sex}</li>
                                <li>{pet.age}</li>
                            </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Search;