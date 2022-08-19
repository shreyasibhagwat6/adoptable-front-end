import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const PetDetails = (props) => {
    const [pets, setPets] = useState({})

    const { petId } = useParams();

    useEffect(() =>{
        axios
            .get(`http://localhost:5050/pets/${petId}`)
            .then(res => {
                setPets(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [petId])

    console.log(pets)

    return(
        <div>
        {Object.keys(pets).map((key, index)=>{
            return(
                <div>
                    <h2>
                        {key}: {pets[key]}
                    </h2>
                </div>    
            )
        })}
        </div>
    )
}

export default PetDetails;