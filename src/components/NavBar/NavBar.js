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
    const [imageSelected, setImageSelected] = useState('');

    const uploadImage = (event) => {

        event.preventDefault();
        // console.log(files[0]);
        // const file = imageSelected;
        // previewFile(file);
        // const previewFile = (file) => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onloadend = () => {
        //         setPreviewSource(reader.result);
        //     }
        // }
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

        console.log(setSelectedFile);

        const newPet = {
            type : event.target.type.value,
            name : event.target.name.value,
            breed : event.target.breed.value,
            sex : event.target.sex.value,
            age : event.target.age.value,
                // image : base64EncodedImage
        }
            console.log(newPet);
            setPet(newPet);
        };


    
    // const handleFileInputChange = (e) =>{
    //    const file = e.target.files[0]
    //    previewFile(file);
    // };

    // const previewFile = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setPreviewSource(reader.result);
    //     }
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(setSelectedFile);
    //     const newPet = {
    //         type : e.target.type.value,
    //         name : e.target.name.value,
    //         breed : e.target.breed.value,
    //         sex : e.target.sex.value,
    //         age : e.target.age.value,
    //         // image : base64EncodedImage
    //     }
    //     console.log(newPet);
    //     setPet(newPet);
    // };

    // const uploadImage = async(base64EncodedImage) => {
    //     console.log(base64EncodedImage);
    //     try {
    //         await fetch('http://localhost:5050/pets', {
    //             method: 'POST',
    //             body: JSON.stringify({ data: base64EncodedImage }),
    //             headers: { 'Content-type': 'application/json' },
    //         });
    //     } catch (error){
    //         console.log(error)
    //     }
    // };

    // console.log(uploadImage);

    console.log(pet)

    // useEffect(()=> {
    //     axios.post('http://localhost:5050/pets', pet)
    //     .then((response) => {
    //     console.log(response)
    // }).catch((error)=> {
    //     console.log(error.response.data)
    // })
    // }, [pet])

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
                <form>
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
                        <input onChange={(event) => setImageSelected(event.target.files[0])} value={fileInputState} name='image' type='file'></input>
                    </div>
                    <button onClick={uploadImage} type='submit'>Submit</button>
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