import React from "react";
import "./AboutPage.css"
import "./ContactsPage.css"
import callingEmoji from "./images/emojis/calling emoji.png";
import NavBar2 from "./nav2";
import SaySomething from "./images/dance pictures/Say something.jpg"
import marriageMen from "./images/dance pictures/Marriage Men.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faNotePad } from '@fortawesome/free-solid-svg-icons'
import {faYoutube, faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';


function ContactsPage(){
    return(
        <>
        
             <div className="ContactsPageContainer">
                <NavBar2/>
                <div className="emojiNdHeading">
                    <h4>WANT TO CONTACT US...</h4>
                <img src={callingEmoji} className="callingEmoji"/>
                </div>
                <div className="contactPageTextContainer">
                    <p> Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, </p>
                </div>
                <div className="contacts">
                <div className="location">
                    <h5>LOCATE US</h5>
                    <p>GoodNews Mission Church</p>
                    <p>Tema Community 12</p>
                    <iframe width="300" height="200" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Goodnews%20Mission%20Church%20Tema%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                
                <div className="reachUs">
                    <h5>REACH US</h5>
                    <div className="socialMediaIcons">
                        <div className="fbNdYouTube">
                            <div className="iconNdLink">
                                <div><FontAwesomeIcon icon={faYoutube}/></div>
                                <div><a href="#" className="socialLink">YouTube </a><br/></div>
                            </div>
                            <div className="iconNdLink">
                                <div><FontAwesomeIcon icon={faFacebookF}/></div>
                                <div><a href="#" className="socialLink">Facebook</a></div>
                            </div>
                        </div>
                        <div className="instaNdPhone">
                             <div className="iconNdLink">
                                <div><FontAwesomeIcon icon={faInstagram}/></div>
                                <div><a href="#" className="socialLink">Instagram </a><br/></div>
                            </div>
                            <div className="iconNdLink">
                                <div><FontAwesomeIcon icon={faPhone} style={{width:'13px'}}/></div>
                                <div><a href="#" className="socialLink">023456789</a><br/></div>
                            </div>
                        </div>
               </div>
                <img src={marriageMen} style={{width:"310px" ,height:"210px"}}/>
                
                </div>
                <div className="register">
                    <h5>JOIN US</h5>
                    <div className="registerText">
                    <p>You want to be part of this amazing family :)</p>
                    </div>
                    {/* <div className="buttonContainer"><button className="button">
                        {/*<FontAwesomeIcon icon={faNotePad}/>Register</button>
                    </div> */}
                    <div className="registerText">
                    <p>You are never too late, just click to 
                        <a href="https://forms.gle/bFHCc1UW4K8fr4o37" className="button">Register</a></p>
                    </div>
                    <div><img src={SaySomething} className="registerImage"/></div>
                </div>
                </div>
                
            </div> 
           

        </>
    )
}

export default ContactsPage;