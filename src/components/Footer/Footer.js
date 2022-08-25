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
                <div>FAQs</div>
            </div>
            <div>
                <h4>Contact</h4>
                <div>+1-905-677-7777</div>
            </div>
            <div>
                <h4>E-MAIL</h4>
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