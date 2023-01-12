import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, Navbar} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import Taekwondo from "./images/dance pictures/Taekwondo.jpg";
import SaySomething from "./images/dance pictures/Say something.jpg";
import './videoSlider.css'
import NavBar2 from './nav2';
import backHome from "./Videos/backHome.mp4"
import loser from "./Videos/Loser like me.mp4"


function VideoSlider(){
    return (
      <>
      <NavBar2/>
      <div className='slider'>
      <div className='welcomeText'><h3><span className='welcome'>Welcome</span> to our Gallery of videos.</h3></div>
      <div className='subTextContainer'>
        <p className='subText'>
             Video provides a powerful way to help you prove your point. When you click Online Video,
              you can paste in the embed code for the video you want to add. You can also type a 
              keyword to search online for the video that best fits your document.
        </p>
      </div>
        <Carousel variant="dark">
         <Carousel.Item> 
          <div className="videoSliderContainer">
          <div className='carouselImageContainer'>
            <video controls className='carouselImage'>
              <source src={backHome} type='video/mp4'/>
              Sorry your browser does not support the video tag. 
            </video>
            {/* <ReactPlayer url={vid} controls muted/> */}
            {/* <img src={Taekwondo} alt="First slide" /> */}
              </div>
              {/* <Carousel.Caption> */}
              <div className='captionTextContainer'>
                 <p className='captionText'>Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other.</p>
                </div>
              {/* </Carousel.Caption> */}
              </div>
          </Carousel.Item> 
    
          <Carousel.Item>
            <div className="videoSliderContainer">
            <div className='carouselImageContainer'>
            <video controls  className='carouselImage'>
              <source src={loser} type='video/mp4'/>
              sorry
            </video>
            </div>
              {/* <Carousel.Caption> */}
              <div className='captionTextContainer'>
                 <p className='captionText'>Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other. </p>
              {/* </Carousel.Caption> */}
              </div>
              </div>
          </Carousel.Item>
      
           <Carousel.Item>
            <div className="videoSliderContainer">
          <div className='carouselImageContainer'>
          <video controls className='carouselImage'>
              <source src={backHome} type='video/mp4'/>
              sorry
            </video>
              </div>
              {/* <Carousel.Caption> */}
              <div className='captionTextContainer'>
                 <p className='captionText'>Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other. </p>
              {/* </Carousel.Caption> */}
              </div>
              </div>
          </Carousel.Item> 

          <Carousel.Item>
            <div className="videoSliderContainer">
          <div className='carouselImageContainer'>
          <video controls className='carouselImage'>
              <source src={loser} type='video/mp4'/>
              Sorry
            </video>
              </div>
              {/* <Carousel.Caption> */}
              <div className='captionTextContainer'>
                 <p className='captionText'>Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other. </p>
                        </div>
              {/* </Carousel.Caption> */}
              </div>
          </Carousel.Item> 

          <Carousel.Item>
            <div className="videoSliderContainer">
          <div className='carouselImageContainer'>
          <video controls className='carouselImage'>
              <source src={backHome} type='video/mp4'/>
              sorry
            </video>
              </div>
              {/* <Carousel.Caption> */}
              <div className='captionTextContainer'>
                 <p className='captionText'>Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other.</p>
                        </div>
              {/* </Carousel.Caption> */}
              </div>
          </Carousel.Item> 

          <Carousel.Item>
            <div className="videoSliderContainer">
          <div className='carouselImageContainer'>
          <video controls className='carouselImage'>
              <source src={backHome} type='video/mp4'/>
              sorry
            </video>
              </div>
              {/* <Carousel.Caption> */}
              <div className='captionTextContainer'>
                 <p className='captionText'>Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other.</p>
                        </div>
              {/* </Carousel.Caption> */}
              </div>
          </Carousel.Item> 

          <Carousel.Item>
            <div className="videoSliderContainer">
          <div className='carouselImageContainer'>
          <video controls className='carouselImage'>
              <source src={backHome} type='video/mp4'/>
              sorry
            </video>
              </div>
              {/* <Carousel.Caption> */}
              <div className='captionTextContainer'>
                 <p className='captionText'>Video provides a powerful way to help you prove your point. When you click Online Video,
                        you can paste in the embed code for the video you want to add. You can also type a 
                        keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, 
                        cover page, and text box designs that complement each other.</p>
                        </div>
              {/* </Carousel.Caption> */}
              </div>
          </Carousel.Item> 

        </Carousel>
      </div>
      </>
      );
    }

    export default VideoSlider;