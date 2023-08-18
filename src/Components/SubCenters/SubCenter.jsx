import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoPravartak from '../Maintainance/NoPravartak';
import './SubCenter.css'
import subCentersData from '../General/Subcenters.json'
import { Button } from '@mui/material';
import { selectCity } from '../../actions';


function SubCenter() {
  
  const subCentersReady = [
    'Ahmednagar','Bhandara','Pune','Nashik','Satara','Buldhana','Dhule','Malegaon','Thane','Raigad','Panvel'
  ];

  
  const navigate= useNavigate();
  // const selectedCity = useSelector((state) => state.selectedCity);
  const dispatch = useDispatch();

  const handleCityChange = (event,cityENG) => {
    const selectedCity = cityENG;
    dispatch(selectCity(selectedCity));
    // navigate('/subCenter');
    if(selectedCity){
      if(subCentersReady.includes(selectedCity))
        navigate(`/subCenter/${selectedCity}`)
      else
        navigate('/noPravartak')
    }
  };

  const selectedCity = useSelector((state) => state.selectedCity);
    
  return (
    <div className='container-fluid p-2'>
      <div>
        <h2>Sub Center List</h2>
        <hr/>
        <p>
          {subCentersData.map((data,index)=>{
            return(
              <Button variant="contained" className='p-2 m-2' fontSize='large' onClick={event => handleCityChange(event, data.nameENG)}
              key={index}>
                <b>{data.nameMR}</b>&nbsp; ({data.nameENG})
              </Button>
            )
          })}
        </p>
      </div>
      
        {/* <div>
          <h2>Subcenter - {selectedCity}</h2>
          <hr/>
          <NoPravartak/>
        </div> */}
        
    </div>
  )
}

export default SubCenter