import React from 'react'
import ImageGallery from '../ImageGallery'

function Nashik() {
  const imagePaths = [
    // Add more image paths here
  ];

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Pune</h2>
      <hr/>
      <div className='row'>
        <ImageGallery images={imagePaths}/>
      </div>
    </div>
  )
}

export default Nashik