import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div>
                <img></img>
                <h4>ABOUT ADOPTABLE</h4>
                <h4>FAQs</h4>
            </div>
            <div>
                <h4>Contact</h4>
                <div>E-MAIL</div>
                <div>info@adoptable.com</div>
            </div>
            <div>
                <h4>Check us out</h4>
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
            </div>
        </div>
    )
}

export default Footer;