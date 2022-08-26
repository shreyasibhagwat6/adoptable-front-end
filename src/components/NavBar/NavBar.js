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

    const uploadImage = (event) => {
        event.preventDefault();

        // console.log(event.name.target.value);

        const formData = new FormData()
        formData.append('file', imageSelected);
        formData.append('upload_preset', 'j8siobok');

        axios.post('https://api.cloudinary.com/v1_1/dxa15yqh4/image/upload', formData)
        .then((response) => {
            console.log(response.data.url);
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
    };

    console.log(selectedFile);

    return(
        <div>
            {/* <img src={selectedFile}></img> */}
            <div className='nav'>
                <Link className='nav__home' to='/Home'>
                    <HomeIcon fontSize='medium' style={{ fill: '#ffffff' }} />
                </Link>
                <div className='nav__fav'>
                    <Link to='/favourites'>
                        <FavoriteBorderIcon fontSize='medium' style={{ fill: '#ffffff' }} />
                    </Link>
                    <PostAddIcon fontSize='medium' style={{ fill: '#ffffff' }}onClick={e => setModalIsOpen(true)}/>
                    <AccountCircleIcon fontSize='medium' style={{ fill: '#ffffff' }} />
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={e => setModalIsOpen(false)}>
                <h4>Post for Adoption</h4>
                <form onSubmit={uploadImage}>
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
                        <input onChange={(event) => setImageSelected(event.target.files[0])} name='image' type='file'></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                {previewSource && (<img src={previewSource} alt='chosen' style={{ height: '300px' }}></img>)}
                <div>
                    <button type='button' onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
        </div>
    )

};

export default NavBar;