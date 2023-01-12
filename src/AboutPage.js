import React from "react";
import dottedLine from "./images/patterns/DottedLine.png";
import "./AboutPage.css"
import BringTheBeat from './images/dance pictures/clippedBTB.png';
import fanDance from './images/dance pictures/clipped fan dance.png';
import thinkingEmoji from './images/emojis/thinking emoji.png';
import askingEmoji from './images/emojis/asking emoji.png';
import NavBar2 from "./nav2";
 

function AboutPage(){
    return(
        <>
        <NavBar2/>
            <div className="AboutUsContainer">
            <div className="Aboutheading">        
            <h3><span className="about">About </span>Ghana Righteous Stars</h3>
            </div>
                <div className="ImageAndTextContainer1">
                <div className="ImageContainer">
                    <img src={BringTheBeat} alt="Righteous Stars Bring the beat" className="image"/>
                </div>
                <div className="TextContainer">
                    <div className="headingNdEmoji">
                    <h3>WHO ARE WE...</h3>
                    <img src={thinkingEmoji} alt="thinking emoji" className="emoji"/>
                    </div>
                    <p className="text">Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other. For example, you can add 
                        a matching cover page, header, and sidebar. Click Insert and then choose the elements you 
                        want from the different galleries.
                    </p>
                    
                </div>
                </div>
                <div className="ImageAndTextContainer2">
                <div className="ImageContainer">
                    <img src={fanDance} alt="Righteous Stars Group Picture" className="image2"/>
                </div>
                <div className="TextContainer">
                    <div className="headingNdEmoji2">
                    <h3>WHAT WE WANT...</h3>
                    <img src={askingEmoji} alt="asking emoji" className="emoji2" width="75px"/>
                    </div>
                    <p className="text2">Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other. For example, you can add 
                        a matching cover page, header, and sidebar. Click Insert and then choose the elements you 
                        want from the different galleries.
                    </p>
                    
                </div>
                </div>
            </div>
           
        
        </>

    )


    

}

export default AboutPage;