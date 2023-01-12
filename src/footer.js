import React from "react";
import './footer.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faYoutube, faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return(
<>
<div className="footerContainer"> 
    <div className="footer">
                <div className="icons socialmediaText">
                    <a href="#"><span>FaceBook</span></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                </div>
                <div className="icons socialmediaText">
                    <a href="#"><span>Instagram</span></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
                <div className="icons socialmediaText">
                    <a href="#"><span>YouTube</span></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube}/></a>
                </div>
                <div className="icons socialmediaText">
                    <a href="#"><span>023456789</span></a>
                    <a href="#"><FontAwesomeIcon icon={faPhone} style={{width:'13px'}}/></a>     
                </div>
                <div className="icons socialmediaText">
                    <a href="#"><span>ghanarighteousstars@gmail.com</span></a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>

                      
    </div>   
     
</div>
 </>

    );
}

export default Footer;