import React,{useState} from "react";
import './navBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"


// import { Router, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
function NavBar(){
    const [isHide,setIsHide]=useState(true);

    return(
    <>
         <FontAwesomeIcon icon={faBars} id="menuIcon" onClick={()=>setIsHide(!isHide)}/>
       <div id="navLinks" className={isHide?"hide":"show"}>
       <Link to='/VideoSlider' style={{color: "white"}}>Videos</Link> 
       <Link to='/AboutPage' style={{color: "white"}}>About</Link> 
       <Link to='/ContactsPage' style={{color: "white"}}>Contact</Link> 
        </div> 
        
    </>

    );
}
export default NavBar;