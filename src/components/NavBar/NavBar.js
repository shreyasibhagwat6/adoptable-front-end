import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
    const [imageSelected, setImageSelected] = useState('');
    const [finalFile, setFinalFile] = useState('')

    const uploadImage = (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append('file', imageSelected);
        formData.append('upload_preset', 'j8siobok');

        axios.post('https://api.cloudinary.com/v1_1/dxa15yqh4/image/upload', formData)
        .then((response) => {
            console.log(response.data);
            setSelectedFile(response.data.url);
        })
        .catch((err) => {
            console.log(err)
        })
        const newPet = {
            type : event.target.type.value,
            name : event.target.name.value,
            breed : event.target.breed.value,
            sex : event.target.sex.value,
            age : event.target.age.value,
        }
        console.log(newPet)
        setPet(newPet);
       pet.image = selectedFile;
    };

    useEffect(()=>{
        pet.image = selectedFile;
    }, [selectedFile]);

    console.log(pet);

    useEffect(()=> {
        axios.post('http://localhost:5050/pets', pet)
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error)
        })
    }, [selectedFile])

    const logOut = () =>{
        alert('Successfully logged out!')
    }
    

    return(
        <div>
            <div className='nav'>
                <ul className='nav__ul'>
                    <Link className='nav__home' to='/Home'>
                        <li>Home</li>
                    </Link>
                    <Link className='nav__fav' to='/favourites'>
                        <li>Favourites</li>
                    </Link>
                    <Link className='nav__post'>
                        <li onClick={e => setModalIsOpen(true)}>Post</li>
                    </Link>
                    <Link className='nav__logout' to='/'>
                        <li>Logout</li>
                    </Link>
                </ul>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={e => setModalIsOpen(false)}>
                <h4>Post for Adoption</h4>
                <form onSubmit={uploadImage}>
                    <div className='form__cont'>
                        <label className='form__label'>Pet Type: </label>
                        <input className='form__input' name='type' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Name: </label>
                        <input className='form__input' name='name' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Gender: </label>
                        <input className='form__input' name='sex' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Age: </label>
                        <input className='form__input' name='age' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Breed: </label>
                        <input className='form__input' name='breed' type='text'></input>
                    </div>
                    <div className='form__cont'>
                        <label className='form__label'>Add an Image: </label>
                        <input className='form__input' onChange={(event) => setImageSelected(event.target.files[0])} name='image' type='file'></input>
                    </div>
                    <button className='form__button' type='submit'>Submit</button>
                </form>
                {/* {previewSource && (<img src={previewSource} alt='chosen' style={{ height: '300px' }}></img>)} */}
                <div>
                    <button className='form__button' type='button' onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
        </div>
    )

};

export default NavBar;