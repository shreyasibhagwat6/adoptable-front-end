import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__info">
                <h4>ABOUT</h4>
                <div>FAQs</div>
            </div>
            <div className="footer__info">
                <h4>CONTACT</h4>
                <div>+1-905-677-7777</div>
                <h4>E-MAIL</h4>
                <div>info@adoptable.com</div>
            </div>
            <div className="footer__info">
                <h4>CHECK US OUT</h4>
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
            </div>
        </div>
    )
}

export default Footer;