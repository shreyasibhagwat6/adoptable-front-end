import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetDetails = (props) => {
    const [pets, setPets] = useState({})
    // const [id, setId] = useState('')

    const id = props.id;
    console.log(props.id);
    // console.log(pets)

    useEffect(() =>{
        axios
            .get(`http://localhost:5050/pets/${id}`)
            .then(res => {
                // console.log(id);
                // console.log(res.data)
                setPets(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [])

    console.log(pets)

    return(
        <div>
            <img alt='' src={pets.image}></img>
            <h2>{pets.name}</h2>
        </div>
    )
}

export default PetDetails;