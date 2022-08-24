import React from 'react';
import { Link } from "react-router-dom";
// import cover from '../../../src/Assets/Images/adoptable_cover.png';
import './Header.scss';


const Header = () => {
    return(
        <div>
            <div className='header'>
                <Link to='/home'>
                    <img className='header__img'></img>
                </Link>
                <h2 className='header__title'>Welcome to Adoptable</h2>
            </div>
        </div>
    )
}

export default Header;