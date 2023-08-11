import { Button } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../General/Footer'
import LeftSideMenu from '../General/LeftSideMenu'
import RightSideMenu from '../General/RightSIdeMenu'
import Homenavbar from '../Homepage/Homenavbar'
import ECdata from './ExecutiveCommitteeData.json'
import EC2014 from '../documents/EC2014.pdf'
import EC2022 from '../documents/EC2022.pdf'



export default function ExecutiveCommittee() {

    const [fileDisplay,setFileDisplay]=useState(false);
    const [fileName,setFileName]=useState("");


    const showFile=(event)=>{
        setFileDisplay(true);
        setFileName(event.target.value);
        // setFileDisplay(true);
    }  

    const handleBack=()=>{
        setFileDisplay(false);
        setFileName("");
    }

  return (
<div className="container-fluid center">
        <div style={{display :fileDisplay? "none":"block"}}>
          <h2>Please Select Year <br/> कृपया वर्ष निवडा</h2>
          {ECdata.map((data,index)=>{
                  return(<Button variant="contained" className='p-2 mb-3 m-3' key={index} value={data.FileName}
                          onClick={showFile}>
                          {data.Year}
                          </Button>)
              })
          }
        </div>


            <div style={{display :fileDisplay? "block":"none",flexDirection:'column'}}>
              <h4>कार्यकारी समिती वर्ष (Executive Committee Year)-{fileName.slice(2)}</h4>
              <div className='row container-fluid'>     
              <object data={EC2014} title="Executive Committee file" width="auto" height="450px"
                  style={{display:fileName==="EC2014"? "block":"none"}} type="application/pdf"/>

              <object data={EC2022} title="Executive Committee file" width="auto" height="450px"
                  style={{display:fileName==="EC2022"? "block":"none"}} type="application/pdf"/>
            </div>
            <br/>  
            <Button variant="contained" onClick={handleBack}>Back</Button>
  </div>
        
</div>

                
  )
}
