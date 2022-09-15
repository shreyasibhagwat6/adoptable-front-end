import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../Assets/Logo/logo1.png'
import NavBar from '../NavBar/NavBar';

import './Header.scss';


const Header = () => {
    return(
        <div>
            <div className='header'>
                <Link className='header__link' to='/home'>
                    <img className='header__img' alt='' src={logo}></img>
                    {/* <p className='header__text'>FIND YOUR FURREVER FRIEND</p> */}
                </Link>
                <div className='header__nav'>
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header;