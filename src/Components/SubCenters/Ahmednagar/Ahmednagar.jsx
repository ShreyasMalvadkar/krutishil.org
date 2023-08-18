import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCity } from '../../../actions';
import ImageGallery from '../ImageGallery'

function Ahmednagar() {
  const imagePaths = [
    './Ahmednagar/images/Nagar_Election-1.jpg',
    './Ahmednagar/images/Nagar_Election-2.jpeg',
    './Ahmednagar/images/Nagar-1.jpeg',
    './Ahmednagar/images/Nagar-2.jpeg',
    './Ahmednagar/images/Nagar-3.jpeg',
    './Ahmednagar/images/Nagar-4.jpeg',
    './Ahmednagar/images/Nagar-5.jpeg',
    './Ahmednagar/images/Nagar-6.jpeg',
    './Ahmednagar/images/Nagar-7.jpeg',
    './Ahmednagar/images/Nagar-8.jpeg',
    './Ahmednagar/images/Nagar-9.jpeg',
    './Ahmednagar/images/Nagar-10.jpeg',
    // Add more image paths here
  ];

  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleBack=()=>{
    dispatch(selectCity(null));
    navigate('/subCenter')
  }

  return (
    <div>
      <h2>Sub Center - Ahmednagar</h2>
      <hr/>
      <div className='row'>
        <ImageGallery images={imagePaths}/>
      </div>
      <hr/>
      <Button variant="contained" onClick={handleBack}>Back</Button>
    </div>
  )
}

export default Ahmednagar