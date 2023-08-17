import React from 'react'
import ImageGallery from '../ImageGallery'

function Pune() {
  const imagePaths = [
    './Pune/images/PuneMeet.png',
    './Pune/images/Pune-1.jpeg',
    './Pune/images/Pune-2.jpeg',
    './Pune/images/Pune-3.jpeg',
    './Pune/images/Pune-4.jpeg',
    './Pune/images/Pune-5.jpeg',
    './Pune/images/Pune-6.jpeg',
    './Pune/images/Pune-7.jpeg',
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

export default Pune