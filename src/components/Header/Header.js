import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import logo from '../../../src/Assets/Images/Adoptable.png';
import './Header.scss';

const Header = () => {
    return(
        <div>
            <div className='header'>
                <Link to='/home'>
                    <img className='header__img' src={logo}></img>
                </Link>
                <h2 className='header__title'>Welcome to Adoptable</h2>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;