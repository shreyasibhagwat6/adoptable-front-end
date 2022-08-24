import React, { useState } from 'react';
import { useFav } from '../../context/FavContext';
import NavBar from '../NavBar/NavBar';

const FavList = (props) => {

    // console.log(props.fav)
    // const favList = props.fav;
    const [fav] = useFav();
    console.log(fav)

    return(
        <div>
            <NavBar />
            <img className='img' alt=''src={`http://localhost:5050/${fav.data.image}`}></img>
            <h2>{fav.data.name}</h2>
            <p>{fav.data.breed}</p>
            <p>{fav.data.sex}</p>
            <p>{fav.data.age}</p>
        </div>
    )
}

export default FavList;