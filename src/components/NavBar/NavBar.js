import React from 'react';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
    return(
        <div>
            <Link to='/Home'>
                <HomeIcon />
            </Link>
            <Link to='/favourites'>
                <FavoriteIcon />
            </Link>
            <MessageIcon />
        </div>
    )
}

export default NavBar;