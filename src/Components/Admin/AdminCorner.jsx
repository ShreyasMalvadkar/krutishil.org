import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLoginStatus } from '../../actions'


const AdminCorner = () => {

    const dispatch = useDispatch();
    const [suggestionData,setSuggestionData]=useState();
    const loginStatus = useSelector((state) => state.login);

    const navigate=useNavigate();


  const handleLogOut=()=>{
    sessionStorage.clear();
    dispatch(setLoginStatus(false));
    navigate('/');
  }

  const handleGetSuggestions=()=>{
    axios.get('https://krutishil.netlify.app/api/suggestions')
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

  const handleLoginButton=()=>{
    // navigate('/adminlogin')
  }

  return (
    <div>
           <div className="container-fluid center" >
                    <div style={{display:loginStatus?"none":"block",color:'red'}} className="container-fluid">
                            <h3>Restricted Access - Only for Website Admin</h3>
                            <Button className='p-2 m-2' variant='contained' onClick={handleLoginButton}>Admin Login</Button>
                    </div>
                    <div style={{display:loginStatus?"block":"none"}} >
                        <h3>Website Admin
                        <Button variant="contained" color="error" onClick={handleLogOut} className="p-2 m-2">
                                Logout
                            </Button>
                        </h3>
                        
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
                        </div>
                    </div>
</div>
  )
}

export default AdminCorner