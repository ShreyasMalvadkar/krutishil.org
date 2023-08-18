import { Button } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import NashikReport from './NashikReport.pdf'
import NashikEvents from './NashikEvents.pdf'

function Nashik() {

  const [eventDoc,setEventDoc]=useState(false);
  const [reportDoc,setReportDoc]=useState(false);

  const imagePaths = [
    // Add more image paths here
  ];

  return (
    <div className='container-fluid'>
      <h2>Sub Center - Nashik</h2>
      <hr/>
          <Button variant='contained' className='p-2 m-3' endIcon={<PictureAsPdfIcon/>} 
            onClick={()=>{setEventDoc(true);setReportDoc(false)}}>Event Doc</Button>

          <Button variant='contained' className='p-2 m-3' endIcon={<PictureAsPdfIcon/>} 
            onClick={()=>{setReportDoc(true); setEventDoc(false)}}>Report Doc</Button>
      <div className='row'>

            {reportDoc && 
              <object data={NashikReport} alt='Nashik Report' width='725px' height='425px' />
            }
            
            {eventDoc &&
              <object data={NashikEvents} alt='Nashik Event'  width='725px' height='425px' />          
            }
              
        <hr/>
          <NavLink to='/subCenter'><Button variant="contained">Back</Button></NavLink>
      </div>
    </div>
  )
}

export default Nashik