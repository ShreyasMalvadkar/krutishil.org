import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import ImageGallery from '../ImageGallery'

function Thane() {
  const imagePaths = [
    './Thane/images/Thane-1.jpeg',
    './Thane/images/Thane-2.jpeg',
    './Thane/images/Thane-3.jpeg',
    './Thane/images/Thane-4.jpeg',
    './Thane/images/Thane-5.jpeg',
    './Thane/images/Thane-6.jpeg',
    './Thane/images/Thane-7.jpeg',
    './Thane/images/Thane-8.jpeg',
    './Thane/images/Thane-9.jpeg',
    // Add more image paths here
  ];

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Thane</h2>
      <hr/>
        <ImageGallery images={imagePaths}/>
        <hr/>
          <NavLink to='/subCenter'><Button variant="contained">Back</Button></NavLink>
    </div>
  )
}

export default Thane