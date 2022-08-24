import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import PetCard from '../PetCard/PetCard';
import cover from '../../Assets/Logo/adoptable_cover.jpg'
import './PetType.scss';

const PetType = () => {

    const [info, setInfo] = useState([]);
    const [petType, setPetType] = useState('')

    useEffect(()=> {
        axios
            .get('http://localhost:5050/type')
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, [])

    console.log(info)
    

    return (
        <div  className='pet'>
            <img className='pet__img' alt='' src={cover}></img>
            {info.map(pet => {
                return (
                    <div className='pet__card'>
                        <Link className='pet__link' to={`/pets/gallery/${pet.type}`}>
                            <div className='pet__type' onClick={e => setPetType(pet.type)}>{pet.type}</div>
                        </Link>
                    </div>
                )
            })}
            {petType !== '' && <PetCard />}
        </div>
    )
};

export default PetType;