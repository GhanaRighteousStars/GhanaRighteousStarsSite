import React, {useState} from "react";
import './navBar.css'
 import { Link } from "react-router-dom";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faBars} from "@fortawesome/free-solid-svg-icons"



function NavBar2(){

    // const [isHide,setIsHide]=useState(true);

    return(
    <>
        {/* <FontAwesomeIcon icon={faBars} id="menuIcon" onClick={()=>setIsHide(!isHide)}
        className={isHide?"menuBlack":"menuWhite"}/> */}
       <div id="navLinks" /*className={isHide?"hide":"show"}*/>
       <Link to="/">Home</Link> 
       <Link to='/VideoSlider'>Videos</Link> 
       <Link to='/AboutPage'>About</Link> 
       <Link to='/ContactsPage'>Contact</Link> 
        </div> 
    </>

    );
}
export default NavBar2;