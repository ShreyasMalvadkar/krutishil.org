import { Button } from '@mui/material';
import React from 'react'
import ImageGallery from '../ImageGallery'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { useState } from 'react';
import Bhandara_report from './BhandaraReport.pdf'
import { NavLink } from 'react-router-dom';

function Bhandara() {
  const imagePaths = [
    './Bhandara/images/Bhandara-1.jpeg',
    './Bhandara/images/Bhandara-2.jpeg',
    './Bhandara/images/Bhandara-3.jpeg',
    './Bhandara/images/Bhandara-4.jpeg',
    './Bhandara/images/Bhandara-5.jpeg',
    // Add more image paths here
  ];

  const [showDoc,setShowDoc]=useState(false);

  const handleShowDoc=()=>{
    setShowDoc(!showDoc)
  }

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Bhandara</h2>
      <hr/>
      
      {showDoc&&
        <div>
          <Button variant='contained' className='p-2 mb-3' endIcon={<PermMediaIcon/>} onClick={handleShowDoc}>View Images</Button>
          <div className='row'>
            <object data={Bhandara_report} width='700px' height='450px' alt='bhandara doc'/>          
          </div>
        </div>
        
      }
      {!showDoc &&
      <div className='row'>
        <Button variant='contained' className='p-2 mb-3' endIcon={<PictureAsPdfIcon/>} onClick={handleShowDoc}>View Document</Button>
        <ImageGallery images={imagePaths}/>
      </div>
      }
       <hr/>
          <NavLink to='/subCenter'><Button variant="contained">Back</Button></NavLink>
    </div>
  )
}

export default Bhandara