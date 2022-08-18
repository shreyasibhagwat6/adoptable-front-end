import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetDetails = (props) => {
    // const [pets, setPets] = useState({})
    // const [id, setId] = useState('')

    // const id = props.match.params.id;
    console.log(props);
    // console.log(pets)

    // useEffect(() =>{
    //     axios
    //         .get(`http://localhost:5050/pets/${id}`)
    //         .then(res => {
    //             // console.log(id);
    //             // console.log(res.data)
    //             setPets(res.data)
    //         })
    //         .catch(err => {
    //             console.log('Error')
    //         })
    // }, [])

    // console.log(pets)

    return(
        <div>
            {/* <ul>
                {pets.map(pet => (
                    <li key={pet.id}>{pet.nature}</li>
                ))}
            </ul> */}
            
        </div>
    )
}

export default PetDetails;