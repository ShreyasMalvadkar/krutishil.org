import React from 'react'
import ImageGallery from '../ImageGallery'

function Dhule() {
  const imagePaths = [
    './Dhule/images/Dhule-1.png',
    './Dhule/images/Dhule-2.png',
    './Dhule/images/Dhule-3.png',
    './Dhule/images/Dhule-4.png',
    // Add more image paths here
  ];

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Dhule</h2>
      <hr/>
      <div className='row'>
        <ImageGallery images={imagePaths}/>
      </div>
    </div>
  )
}

export default Dhule