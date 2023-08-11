import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import RightTabMenuData from "./RightTabMenuData.json";
import './menu.css';

function RightSideMenu() {
    const [blinkingState,setBlinkingState]=useState(true);

    const handleStopBlinking=()=>{ 
    setBlinkingState(false);
}


  return (
        <table className='table table-light table-striped bg-white rounded shadow' >
            <tbody>
                {RightTabMenuData.map((data,index)=>{
                    return(
                            <tr key={index}>
                                <td>
                                    <div  className='col center'>
                                        <NavLink to={data.PageComponentAddress} value={data.PageTitle}
                                        onClick={data.Update?handleStopBlinking:""}>
                                            <b>{data.PageTitle}<br/>{data.PageTitleMarathi}</b>
                                        </NavLink>
                                        <span className={data.Update ? "blink-text  p-1 m-1" : ""} 
                                        style={{backgroundColor:data.Update ? "yellow":"", border: data.Update ?'2px solid red':""  ,borderRadius: data.Update ?'5px':'', display:blinkingState?"block":"none"}}>{data.Update}</span>
                                        
                                    </div>
                                </td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
  )
}

export default RightSideMenu