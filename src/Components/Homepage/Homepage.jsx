import React, { useEffect, useState } from 'react'
import LeftSideMenu from '../General/LeftSideMenu'
import RightSideMenu from '../General/RightSIdeMenu'
import Homenavbar from './Homenavbar'
import ImageSlides from './ImageSlides'
import "./Homepage.css";
import Footer from '../General/Footer'
import WelcomeModal from '../General/WelcomeModal'

const Homepage = () => {
    const [show,setShow] =useState(true);

    useEffect(()=>{
        setShow(true);
    },[])

    const handleClose=()=>{
        setShow(false);
    }

    setTimeout(function () { 
        setShow(false); 
    }, 1200);

  return (
    <div onClick={handleClose} className='container-fluid'>
        <ImageSlides/>
    </div>
                
  )
}

export default Homepage