import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MessageIcon from '@mui/icons-material/Message';
import logo from '../../../src/Assets/Images/Adoptable.png';
import './Header.scss';

const Header = () => {
    return(
        <div className='header'>
            <img className='header__img' src={logo}></img>
            <h2 className='header__title'>Welcome to Adoptable</h2>
        </div>
    )
}

export default Header;