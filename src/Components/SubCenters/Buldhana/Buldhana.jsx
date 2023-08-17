import React from 'react'
import ImageGallery from '../ImageGallery'

function Buldhana() {
  const imagePaths = [
    './Buldhana/images/Buldhana-1.jpeg',
    './Buldhana/images/Buldhana-2.jpeg',
    './Buldhana/images/Buldhana-3.jpeg',
    // Add more image paths here
  ];

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Buldhana</h2>
      <hr/>
      <div className='row'>
        <ImageGallery images={imagePaths}/>
      </div>
    </div>
  )
}

export default Buldhana