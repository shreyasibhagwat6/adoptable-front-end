import React, { createContext, useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import './PetDetails.scss'
import { useFav } from '../../context/FavContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from "@mui/material/colors";
import heart from '../../Assets/Icons/heart.png';
import activeHeart from '../../Assets/Icons/heart_active.png';

const PetDetails = (props) => {
    const [pets, setPets] = useState({})
    const [active, setActive] = useState('false');
    const [fav, updateFav] = useFav();
    const [modalIsOpen, setModalIsOpen] = useState(false);  
    const { petId } = useParams();

    console.log(petId);

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

    
        const clickHandler = () => {
            setActive(!active);
            updateFav('pets', pets.id, pets)
        }

    return(
        <div>
            <img className='img' alt='' src={`http://localhost:5050/${pets.image}`}></img>
            <div onClick={clickHandler}>
                <img className='img1' alt='' src={heart}></img>
                <img className={active ? 'app': 'img2'} alt='' src={activeHeart}></img>
            </div>
            <h2>{pets.name}</h2>
            <div>
                <h4>About</h4>
                <div>
                    <div>
                        <p>{pets.sex}</p>
                        <p>{pets.age}</p>
                    </div>
                    <div>
                        <h4>Colour and Breed</h4>
                        <p>{pets.colour}</p>
                        <p>{pets.breed}</p>
                    </div>
                    <div>
                        <h4>Adoption Story</h4>
                        <p>{pets.adoption}</p>
                    </div>
                    <div>
                        <h4>Litter-Trained</h4>
                        <p>{pets.littertrained}</p>
                    </div>
                    <div>
                        <h4>Health</h4>
                        <p>{pets.health}</p>
                    </div>
                    <div>
                        <h4>Adoption Fee: </h4>
                        <p>{pets.fee}</p>
                    </div>
                </div>
                <h3>Meet {pets.name}</h3>
                <div>
                    <p>{pets.nature}</p>
                </div>
            </div>
            <p>{pets.users_id}</p>
            <button>Message</button>
            <button onClick={e => setModalIsOpen(true)}>Adopt {pets.name}</button>
            <Modal isOpen={modalIsOpen} onRequestClose={e => setModalIsOpen(false)}>
                <h4>Adoption Application Form</h4>
                <form>
                    <div>
                        <label>First Name: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>E-Mail: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Tell Us About Yourself: </label>
                        <input type='text'></input>
                    </div>
                </form>
                <div>
                <button onClick={e => setModalIsOpen(false)}>Submit</button>
                    <button onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
        </div>
    )
}

export default PetDetails;