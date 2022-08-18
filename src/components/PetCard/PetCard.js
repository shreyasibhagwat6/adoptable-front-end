import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import PetDetails from '../PetDetails/PetDetails';
import './PetCard.scss';

// const PetCard = (props) => {
//     const [pets, setPets] = useState([]);
//     const [type, setType] = useState('');
//     const [id, setId] = useState('');

//     useEffect(()=> {
//         axios
//             .get('http://localhost:5050/type')
//             .then(res => {
//                 setPets(res.data)
//             })
//             .catch(err => {
//                 console.log('Error')
//             })
//     }, [])

//     console.log(pets);

//     const clickHandler = props.data.filter(result => result.type.charAt(0).toUpperCase() + result.type.slice(1)===type)

//     return(
//         <div>
//             <div>
//                 {clickHandler.map((pet)=>{
//                 return (
//                     <Link to={`/pets/${pet.id}`}>
//                         <div onClick={e => setId(pet.id)} key={pet.id}>
//                             <img className='img' alt='i' src={pet.image}></img>
//                             <h2>{pet.name}</h2>
//                             <div>{pet.type}</div>
//                             <div>{pet.sex}</div>
//                             <div>{pet.age}</div>
//                         </div>
//                         { id !== '' && <PetDetails petId = {id} />}
//                     </Link>
//                 )    
//                 })};    
//             </div>
//             <div>
//                 {/* <Link to={`/pets`}> */}
//                 {pets.map(pet =>
//                 <button onClick={e => setType(pet.type)} key={pet.id}>
//                     {pet.type}
//                 </button>
//                 )}
//                 {/* </Link> */}
//             </div>
//         </div>
//     )
// }

const PetCard = (props) => {

    const [details, setDetails] = useState('');
    const [id, setId] = useState('');

    const pets = props.petList
    const type = props.data

    const filteredPets = props.petList.filter(pet => pet.type === type);
    console.log(filteredPets);

    return (
            <div>
                {filteredPets.map(pet => {
                    return(
                        <div onClick={e => setDetails('true')}>
                            <img alt='' src={pet.image}></img>
                            <h2>{pet.name}</h2>
                            <p>{pet.breed}</p>
                            <p>{pet.sex}</p>
                            <p>{pet.age}</p>
                        </div>
                    )
                })}
                {details !== '' && <PetDetails id={id}/>}
            </div>
    )
}

export default PetCard;