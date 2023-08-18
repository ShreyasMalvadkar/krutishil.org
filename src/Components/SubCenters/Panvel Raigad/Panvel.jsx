import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import ImageGallery from '../ImageGallery'

function Panvel() {
  const imagePaths = [
    './Panvel Raigad/images/Panvel_Raigad-1.jpeg',
    './Panvel Raigad/images/Panvel_Raigad-1.jpeg',
    './Panvel Raigad/images/Panvel_Raigad-2.jpeg',
    './Panvel Raigad/images/Panvel_Raigad-3.jpeg',
    './Panvel Raigad/images/Panvel_Raigad-4.jpeg',
    './Panvel Raigad/images/Panvel_Raigad-5.jpeg',
    './Panvel Raigad/images/Panvel_Raigad-6.jpeg',
    './Panvel Raigad/images/Panvel_Raigad-7.jpeg',
    // Add more image paths here
  ];

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Panvel</h2>
      <hr/>
      <div className='row'>
        <ImageGallery images={imagePaths}/>
        <hr/>
          <NavLink to='/subCenter'><Button variant="contained">Back</Button></NavLink>
      </div>
    </div>
  )
}

export default Panvel