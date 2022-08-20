import React from 'react';
import NavBar from '../NavBar/NavBar';
import logo from '../../../src/Assets/Images/Adoptable.png';
import './Header.scss';

const Header = () => {
    return(
        <div>
            <div className='header'>
                <img className='header__img' src={logo}></img>
                <h2 className='header__title'>Welcome to Adoptable</h2>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;