import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import message from '../../Assets/Icons/message.png'
import home from '../../Assets/Icons/home.png';
import favorite from '../../Assets/Icons/fav.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import axios from 'axios';
import './NavBar.scss'

const NavBar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);  
    const [pet, setPet] = useState({});
    const [fileInputState, setfileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState()
    
    const handleFileInputChange = (e) =>{
       const file = e.target.files[0]
       previewFile(file);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        uploadImage(previewSource);

        const newPet = {
            type : e.target.type.value,
            name : e.target.name.value,
            breed : e.target.breed.value,
            sex : e.target.sex.value,
            age : e.target.age.value,
            // image : base64EncodedImage
        }
        console.log(newPet);
        setPet(newPet);
    };

    const uploadImage = async(base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            await fetch('http://localhost:5050/pets', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-type': 'application/json' },
            });
        } catch (error){
            console.log(error.data)
        }
    };

    console.log(uploadImage);

    console.log(pet)

    useEffect(()=> {
        axios.post('http://localhost:5050/pets', pet)
        .then((response) => {
        console.log(response)
    }).catch((error)=> {
        console.log(error.response.data)
    })
    }, [pet])

    return(
        <div>
            <div className='nav'>
                <Link className='nav__home' to='/Home'>
                    <img className='home' alt='' src={home}></img>
                </Link>
                <div className='nav__fav'>
                    <Link to='/favourites'>
                        <img className='fav' alt='' src={favorite}></img>
                    </Link>
                    {/* <Link to='/messages'>
                        <img className='message' alt='' src={message}></img>
                    </Link> */}
                    <PostAddIcon onClick={e => setModalIsOpen(true)}/>
                    <AccountCircleIcon />
                </div>
            </div>
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
                    <div>
                        <label>Add an Image: </label>
                        <input onChange={handleFileInputChange} value={fileInputState} name='image' type='file'></input>
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
                {previewSource && (<img src={previewSource} alt='chosen' style={{ height: '300px' }}></img>)}
                <div>
                    <button type='button' onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
        </div>
    )
}

export default NavBar;