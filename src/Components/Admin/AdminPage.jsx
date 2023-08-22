import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm'

function AdminPage() {
  const [suggestionData,setSuggestionData]=useState();
  const loginStatus = useSelector((state) => state.login);

  useEffect(()=>{
    console.log('login Status - '+loginStatus)
  })

  const handleGetSuggestions=()=>{
    axios.get('http://localhost:3001/api/suggestions')
      .then((response) =>{
        setSuggestionData(response);
        console.log("--------------------------")
        // console.log(response);
        console.log("--------------------------")
      })
      .catch((error)=> {
        console.log(error);
      }) 
  }

  return (
    <div className='container-fluid'>
        <h3>Admin Page</h3>

        {!loginStatus && <LoginForm/>}

        {loginStatus && <div>Admin Logged In</div>}

        <>
        <Button variant="contained" onClick={handleGetSuggestions} className="p-2 m-2">View All Suggestions</Button>
                        <Button variant="contained" className="p-2 m-2">Add Event</Button>
                        <Button variant="contained" className="p-2 m-2">Add Information</Button>
                        <div style={{display:suggestionData?"block":"none"}}>
                            <br/>
                            <p><b>Total Suggestions - {suggestionData?.data?.suggestions.length}</b></p>
                            <table className='table table-striped table-light table-hover table-bordered shadow '>
                                
                                        <th>Sr. No.</th>
                                        <th>Name</th>
                                        <th>Date (Time)</th>
                                        <th>Suggestion</th>
                                
                                <tbody>
                                    {suggestionData?.data?.suggestions.map((data,index)=>{
                                        return(<tr key={index}>
                                            <td>{index+1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.date.slice(0,10)}<br/>({data.date.slice(11,19)})</td>
                                                <td>{data.suggestion}</td>
                                            </tr>) 
                                    })}
                                </tbody>
                            </table>    
                        </div>  
        </>
    </div>
  )
}

export default AdminPage