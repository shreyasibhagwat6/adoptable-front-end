import React, { useState, useEffect } from 'react';
import axios from 'axios';

const petDetails = () => {
    const [pets, setPets] = useState([])

    useEffect(() =>{
        axios
            .get('http://localhost:5050/pets')
            .then(res => {
                console.log(res)
                setPets(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [])
}