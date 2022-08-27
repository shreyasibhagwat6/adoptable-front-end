import React, { useState } from 'react';
import { useFav } from '../../context/FavContext';
import './FavList.scss';
import NavBar from '../NavBar/NavBar';

const FavList = () => {
    const [fav] = useFav();
    console.log(fav.data)

    return(
        <div className='card__head'>
            <div className='card__top'>
                <div className='card'>
                    <img className='card__img' alt=''src={`http://localhost:5050/${fav.data.image}`}></img>
                    <h2 className='card__name'>{fav.data.name}</h2>
                    <p className='card__info'>{fav.data.breed}</p>
                    <div className='card__cont'>
                        <p className='card__info'>{fav.data.sex}</p>
                        <p className='card__info'>{fav.data.age}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavList;