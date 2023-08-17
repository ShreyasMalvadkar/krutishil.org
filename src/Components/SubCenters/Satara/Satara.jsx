import { Button } from '@mui/material';
import React from 'react'
import ImageGallery from '../ImageGallery'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { useState } from 'react';
import SataraEvents from './SataraEvents.pdf'
import SataraMeeting from './SataraMeeting.pdf'

function Satara() {
  const imagePaths = [
    './Satara/images/SataraInfo.jpg',
    './Satara/images/Satara-1.jpeg',
    './Satara/images/Satara-2.png',
    './Satara/images/Satara-3.png',
    './Satara/images/Satara-4.png',
    './Satara/images/Satara-5.png',
    './Satara/images/Satara-6.png',
    './Satara/images/Satara-7.png',
    './Satara/images/Satara-8.png',
    './Satara/images/Satara-9.png',
    './Satara/images/Satara-10.png',
    // Add more image paths here
  ];

  const [showDoc,setShowDoc]=useState(false);
  const [eventDoc,setEventDoc]=useState(false);
  const [meetingDoc,setMeetingDoc]=useState(false);

  const handleShowDoc=()=>{
    setShowDoc(!showDoc)
  }

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Bhandara</h2>
      <hr/>
      
      {showDoc&&
        <div>
          <Button variant='contained' className='p-2 m-3' endIcon={<PermMediaIcon/>} onClick={handleShowDoc}>View Images</Button>
          
          <Button variant='contained' className='p-2 m-3' endIcon={<PictureAsPdfIcon/>} 
            onClick={()=>{setEventDoc(true);setMeetingDoc(false)}}>Meeting Doc</Button>

          <Button variant='contained' className='p-2 m-3' endIcon={<PictureAsPdfIcon/>} 
            onClick={()=>{setMeetingDoc(true); setEventDoc(false)}}>Event Doc</Button>
          
          <div className='row'>

            {meetingDoc && <div>
              <object data={SataraMeeting} width='700px' height='450px' alt='SataraEvents pdf'/>
            </div>}
            
            {eventDoc && <div>
              <object data={SataraEvents} width='700px' height='450px' alt='SataraEvents pdf'/>          
            </div>}
              
          </div>
        </div>
        
      }
      {!showDoc &&
      <div className='row'>
        <Button variant='contained' className='p-2 mb-3' endIcon={<PictureAsPdfIcon/>} onClick={handleShowDoc}>View Document</Button>
        <ImageGallery images={imagePaths}/>
      </div>
      }
    </div>
  )
}

export default Satara