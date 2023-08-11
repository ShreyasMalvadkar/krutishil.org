import { Button } from '@mui/material';
import React,{ useState } from 'react'
import AuditRepotData from './AuditReportData.json'
import AuditReport2017_18 from '../documents/AuditReport2017-18.pdf'
import AuditReport2021_22 from '../documents/AuditReport2021-22.pdf'

const AuditReport = () => {
    const [fileDisplay,setFileDisplay]=useState(false);
    const [fileName,setFileName]=useState("");


    const showFile=(event)=>{
        setFileName(event.target.value);
        setFileDisplay(true);
    }  


  return (
<div className="container-fluid center">
                    
    <div style={{display :fileDisplay? "none":"block"}}>
        <h2>Please Select Year <br/> कृपया वर्ष निवडा</h2>
        {AuditRepotData.map((data,index)=>{
                return(<Button variant="contained" className='p-2 mb-3 m-3' key={index} value={data.FileName}
                        onClick={showFile}>
                        {data.Year}
                        </Button>)
            })
        }
    </div>

    <div style={{display :fileDisplay? "block":"none"}} className='container-fluid'>
        <h4>लेखापरीक्षण अहवाल वर्ष (Audit Report Year)-{fileName.slice(11)}</h4>
        {AuditRepotData.map((data,index)=>{
                    return(<Button variant="contained" className='p-2 mb-3 m-3' key={index} value={data.FileName}
                            onClick={showFile}>
                            {data.Year}
                            </Button>)
                })
            }
        <br/>
        <div className="row">
            <object data={AuditReport2017_18} title="Executive Committee file" width="auto" height="450px"
                style={{display:fileName==="AuditReport2017-18"? "block":"none"}} />

            <object data={AuditReport2021_22} title="Executive Committee file" width="auto" height="450px"
                style={{display:fileName==="AuditReport2021-22"? "block":"none"}}/>
        </div>
        
    </div>
</div>

  );
}

export default AuditReport