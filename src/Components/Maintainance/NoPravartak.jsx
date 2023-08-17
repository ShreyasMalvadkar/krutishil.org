import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import '../SubCenters/SubCenter.css'
import { useNavigate } from 'react-router-dom';
import { selectCity } from '../../actions';
import { Button } from '@mui/material';

function NoPravartak() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleBack=()=>{
    dispatch(selectCity(null));
    navigate('/subCenter')
  }

  const selectedCity = useSelector((state) => state.selectedCity);

  return (
    <div className="container-fluid p-2">
      <h2>Sub Center - {selectedCity}</h2>
      <hr/>
      <div className="center p-2">
      <div className='row center p-3 bg-glass'>
        <h3>प्रवर्तक नेमण्यात आले आहेत व संघटना बांधणी चे काम वेगाने सुरू आहेत.</h3>
        <h3>Promoters have been appointed and organization building work is in full swing.</h3>
      </div>
    </div> 
    <br/>
    <div className='row'>
        <Button variant="contained" onClick={handleBack}>Back</Button>
      </div>
    </div>
    
  )
}

export default NoPravartak