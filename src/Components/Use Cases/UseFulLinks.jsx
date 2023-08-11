import React, { useState } from 'react'
import Footer from '../General/Footer'
import LeftSideMenu from '../General/LeftSideMenu'
import RightSideMenu from '../General/RightSIdeMenu'
import Homenavbar from '../Homepage/Homenavbar'
import medicalForm from '../documents/MedicalForm.pdf'
import { Button } from '@mui/material'
import LinkData from './UseFulLinkData.json'


const UseFulLinks = () => {
    const [fileDisplay,setFileDisplay]=useState(false);
    const [fileName,setFileName]=useState("");


    const showFile=(event)=>{
        setFileName(event.target.value);
        setFileDisplay(true);
    }

    const handleBack=()=>{
        setFileDisplay(false);
        setFileName("");
    }

  return (
    <div className="container-fluid center">
                <div style={{display :fileDisplay? "none":"block"}}>
                    <h2>Please Select Link <br/> कृपया दुवा निवडा</h2>
                    {LinkData.map((data,index)=>{
                            return(<Button variant="contained" className='p-2 mb-3 m-3' key={index} value={data.LinkTitile_EN}
                                    onClick={showFile}>
                                    <b>{data.LinkTitile_MR}</b>-{data.LinkTitile_EN}
                                    </Button>)
                        })
                    }
                </div>

                <div style={{display :fileDisplay? "block":"none"}} className='row container-fluid'>
                    <h4>{fileName}</h4>
                        <object data={medicalForm} title="Executive Committee file" width="auto" height="450px" 
                        style={{display:fileName==="Procedure for Medical Aid by CM Maharashtra"? "block":"none"}}/>
                        <br/>
                            <Button variant="contained" onClick={handleBack}>Back</Button>
                </div>
    </div>  
  )
}

export default UseFulLinks