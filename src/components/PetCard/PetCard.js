import React, { useState, useEffect  } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import PetDetails from '../PetDetails/PetDetails';
import NavBar from '../NavBar/NavBar';
import { useFav } from '../../Context/FavContext'
import './PetCard.scss';

const PetCard = (props) => {

    const [results, setResults] = useState([]);
    const [details, setDetails] = useState('');
    const [fav, updateFav] = useFav();
    const [active, setActive] = useState('false');
    const { petsType } = useParams();

    useEffect(() => {
        console.log('hello')
        axios.get('http://localhost:5050/pets')
            .then(res => {
                console.log(res.data)
                setResults(res.data)
            })
            .catch(err => {
                console.log('Error')
            })
    }, []);

    console.log(results)
    console.log(details)

    const filteredPets = results.filter(pet => pet.type === petsType);
    console.log(filteredPets);

    const petImg = filteredPets.map((image)=>
        image.image
    );
    
    console.log(petImg);
    
    let petArray = [];
    const petUrl = petImg.map (image => {
        if(image.charAt(0) === 'i') {
            let imgUrl = 'http://localhost:5050/'+ image;
            petArray.push(imgUrl)
        } else {
            petArray.push(image)
        }
        
    })

    console.log(petArray[1])

    for (let i=0; i<filteredPets.length; i++) {
        filteredPets[i].petImage = petArray[i];
    }

    console.log(filteredPets);

    console.log(details)

    const clickHandler = () => {
        setActive(!active);
        updateFav('pets', results.id, results)
    }

    return (
        <div className='card__head'>
            {filteredPets.map(pet => {
                return(
                    <div className='card__top'>
                        <Link className='card__link' to={`/pets/${pet.id}`}>
                            <div className='card' onClick={e => {setDetails(pet.id)}} key={pet.id}>
                                <img className='card__img' alt='' src={pet.petImage}></img>
                                <h2 className='card__name'>{pet.name}</h2>
                                <p className='card__info'>{pet.breed}</p>
                                <div className='card__cont'>
                                    <p className='card__info'>{pet.sex}</p>
                                    <p className='card__info'>{pet.age}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
            {details !== '' && <PetDetails id={details}/>}
        </div>
)

    
}
export default PetCard;