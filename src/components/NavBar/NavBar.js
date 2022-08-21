import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Modal from 'react-modal';

const NavBar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);  

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
                <h4>Adoption Application Form</h4>
                <form>
                    <div>
                        <label>Pet Type: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Pet Gender: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Breed: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Colour: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Pet Name: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Adoption Purpose: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Adoption Fee: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Litter-Trained: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Health: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Nature: </label>
                        <input type='text'></input>
                    </div>
                </form>
                <div>
                <button onClick={e => setModalIsOpen(false)}>Post</button>
                    <button onClick={e => setModalIsOpen(false)}>Close</button>
                </div>    
            </Modal>
            <AccountCircleIcon />
        </div>
    )
}

export default NavBar;