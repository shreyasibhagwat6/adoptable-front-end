import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import axios from 'axios';

const NavBar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);  
    const [pet, setPet] = useState({});
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const newPet = {
            type : e.target.type.value,
            name : e.target.name.value,
            breed : e.target.breed.value,
            sex : e.target.sex.value,
            age : e.target.age.value,
        }
        console.log(newPet);

        setPet(newPet);
        // axios.post('http://localhost:5050/pets', { newPet })
        // .then((response) => {
        //     setPet(response.data)
        //     console.log(pet)
        // }).catch((error)=> {
        //     console.log(error)
        // })
    };

    console.log(pet)

    useEffect(()=> {
        axios.post('http://localhost:5050/pets', { pet })
        .then((response) => {
        console.log(response.data.json)
    }).catch((error)=> {
        console.log(error.response.data)
    })
    }, [pet])

    return(
        <div>
            <Link to='/Home'>
                <HomeIcon />
            </Link>
            <Link to='/favourites'>
                <FavoriteIcon />
            </Link>
            <Link to='/messages'>
                <MessageIcon />
            </Link>
            <PostAddIcon onClick={e => setModalIsOpen(true)}/>
            <Modal isOpen={modalIsOpen} onRequestClose={e => setModalIsOpen(false)}>
                <h4>Post for Adoption</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Pet Type: </label>
                        <input name='type' type='text'></input>
                    </div>
                    <div>
                        <label>Name: </label>
                        <input name='name' type='text'></input>
                    </div>
                    <div>
                        <label>Gender: </label>
                        <input name='sex' type='text'></input>
                    </div>
                    <div>
                        <label>Age: </label>
                        <input name='age' type='text'></input>
                    </div>
                    <div>
                        <label>Breed: </label>
                        <input name='breed' type='text'></input>
                    </div>
                    <button type='submit'>Submit</button>
                    {/* <div>
                        <label>User ID: </label>
                        <input name='users_id' type='text'></input>
                    </div>
                    <div>
                        <label>Colour: </label>
                        <input name='colour' type='text'></input>
                    </div>
                    <div>
                        <label>Adoption Purpose: </label>
                        <input name='adoption' type='text'></input>
                    </div>
                    <div>
                        <label>Fee: </label>
                        <input name='fee' type='text'></input>
                    </div>
                    <div>
                        <label>Litter-Trained: </label>
                        <input name='littertrained' type='text'></input>
                    </div>
                    <div>
                        <label>Health: </label>
                        <input name='health' type='text'></input>
                    </div>
                    <div>
                        <label>Nature: </label>
                        <input name='nature' type='text'></input>
                    </div> */}
                </form>
                <div>
                    <button type='button' onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
            <AccountCircleIcon />
        </div>
    )
}

export default NavBar;