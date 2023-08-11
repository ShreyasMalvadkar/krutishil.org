import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../General/Footer'
import LeftSideMenu from '../General/LeftSideMenu'
import RightSideMenu from '../General/RightSIdeMenu'
import Homenavbar from '../Homepage/Homenavbar'

const AdminCorner = () => {

    const[key,setKey]=useState(0)
    const[loginStatus,setLoginStatus]=useState(false);
    const [suggestionData,setSuggestionData]=useState();
    const navigate=useNavigate();


    useEffect(()=>{
        fetchKey();
    })

    const checkLogin=()=>{
            if(key==='620138037430038'){
                console.log("Logged In");
                setLoginStatus(true);
            }
            else{
                setLoginStatus(false);
                console.log("Not Logged In");
            }
    }

    function fetchKey(){
        const key=sessionStorage.getItem("login_status");
        setKey(key);
        checkLogin();
    }

  const handleLogOut=()=>{
    sessionStorage.clear();
    setLoginStatus(false);
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

  return (
    <div>
        <Homenavbar />
        <div style={{paddingTop:"20px"}} className="container-fluid">
            <div className="row center">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 center">
                    <LeftSideMenu/>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 center" >

                    <div style={{display:loginStatus?"none":"block",color:'red'}} className="container-fluid">
                            <h3>Restricted Access - Only for Website Admin</h3>
                    </div>
{/* ------------------------------------ Admin Corner Code --------------------------------------------------------------------------- */}
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
{/* ------------------------------------ Admin Corner Code --------------------------------------------------------------------------- */}

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 center">
                    <RightSideMenu/>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default AdminCorner