import React from 'react';
import { Link } from "react-router-dom";
// import cover from '../../../src/Assets/Images/adoptable_cover.png';
import logo from '../../Assets/Logo/logo.png'
import './Header.scss';


const Header = () => {
    return(
        <div>
            <div className='header'>
                <Link to='/home'>
                    <img className='header__img' alt='' src={logo}></img>
                    <p className='header__text'>FIND YOUR FURREVER FRIEND</p>
                </Link>
            </div>
        </div>
    )
}

export default Header;