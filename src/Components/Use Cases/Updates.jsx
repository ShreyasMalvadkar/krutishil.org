import React, { useState } from 'react'
import Footer from '../General/Footer'
import LeftSideMenu from '../General/LeftSideMenu'
import RightSideMenu from '../General/RightSIdeMenu'
import Homenavbar from '../Homepage/Homenavbar'
import UpdatesData from '../General/UpdatesData.json'
import { Button } from '@mui/material'
import './list.css';
import Corrigendum from '../documents/Corrigendum 21-02-2023.pdf'
import Chronicle from '../documents/AGM Pune 26-3-23 Itiwrutta.pdf'

const Updates = () => {

    const [fileName,setFileName]=useState("");
    const [fileDisplay,setFileDisplay]=useState(false);

    const handleFile=(event)=>{
        setFileDisplay(true);
        setFileName(event.target.value);
        console.log(event.target.value);
    }
    const handleBack=()=>{
        setFileDisplay(false);
        setFileName("");
    }

  return (
    <div className="container-fluid center" >   
        <ul className='no-dots'style={{display :fileDisplay? "none":"block"}}>
        <h2>Updates</h2>
            {UpdatesData.map((data,index)=>{
            return (<li key={index}>
                <Button variant="contained" className='p-2 mb-3 m-3' key={index} value={data.Title_ENG} onClick={handleFile}>
            <b>{data.Title_MAR}</b>- {data.Title_ENG}</Button>
            </li> )
            })}
        </ul>
        <div style={{display :fileDisplay? "block":"none"}} className='container center row'>
            <h3>{fileName}</h3>

                    <object data={Corrigendum} title="Corrigendum 21-02-2023" width="auto" height="450px" 
                        style={{display:fileName==="Corrigendum 21-02-2023"? "block":"none"}}/>

                    <object data={Chronicle} title="Chronicle 26-03-2023" width="auto" height="450px"
                        style={{display:fileName==="Chronicle 26-03-2023"? "block":"none"}}/>
                <br/>
                <Button variant="contained" onClick={handleBack}>Back</Button>
        </div>
    </div>
                
  )
}

export default Updates