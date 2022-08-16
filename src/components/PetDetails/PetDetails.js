import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PetDetails = (props) => {
    // const [pets, setPets] = useState([])
    // const [id, setId] = useState('')
    console.log(props.match.params.id)

    // useEffect(() =>{
    //     axios
    //         .get('http://localhost:5050/pets')
    //         .then(res => {
    //             console.log(res)
    //             setPets(res.data)
    //         })
    //         .catch(err => {
    //             console.log('Error')
    //         })
    // }, [])

    return(
        <div>
            {/* <ul>
                {pets.map(pet => (
                    <li key={pet.id}>{pet.nature}</li>
                ))}
            </ul> */}
            hello
        </div>
    )
}

export default PetDetails;