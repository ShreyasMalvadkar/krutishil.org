import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import ImageGallery from '../ImageGallery'

function Malegaon() {
  const imagePaths = [
    './Malegaon/images/Malegaon-1.jpeg',
    './Malegaon/images/Malegaon-2.jpeg',
    './Malegaon/images/Malegaon-3.jpeg',
    './Malegaon/images/Malegaon-4.jpeg',
    './Malegaon/images/Malegaon-5.jpeg',
    // Add more image paths here
  ];

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Malegaon</h2>
      <hr/>
      <div className='row'>
        <ImageGallery images={imagePaths}/>
      </div>
      <hr/>
          <NavLink to='/subCenter'><Button variant="contained">Back</Button></NavLink>
    </div>
  )
}

export default Malegaon