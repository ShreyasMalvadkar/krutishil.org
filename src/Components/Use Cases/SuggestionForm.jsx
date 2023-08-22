import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../General/Footer';
import LeftSideMenu from '../General/LeftSideMenu';
import RightSideMenu from '../General/RightSIdeMenu';
import Homenavbar from '../Homepage/Homenavbar';

const SuggestionForm = () => {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [error, setError] = useState('');

  const navigate=useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
    // Basic validation
    if (!name || !suggestion) {
      setError('Please fill in both name and suggestion.');
    }
    else setError('')
  };

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
    // Basic validation
    if (!name || !suggestion) {
      setError('Please fill in both name and suggestion.');
    }
    else setError('')
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !suggestion) {
      setError('Please fill in both name and suggestion.');
    }
    else setError('');
  
    // Send the data to the server
    try {
      const response = await fetch('http://localhost:3001/api/saveSuggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, suggestion }),
      });

      // Handle the response from the server if necessary
      if (response.status===200) {
        // Data was successfully saved
        console.log('Data was saved successfully.');
        navigate('/');
      } else {
        // Handle error responses from the server
        console.error('Failed to save data. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while saving data:', error);
    }
  };

  return (
    <div className="container-fluid text-center" >
      <form onSubmit={handleSubmit} className='shadow p-3 mb-3'>
        <table className='table table-secondary table-bordered table-striped shadow rounded'>
          <th colSpan={2}><h4>Suggestion Form</h4></th>
          <tbody>
            <tr>
                <td><label><b>Name:</b></label></td>
                  <td><input type="text" value={name} onChange={handleNameChange} className="form-control"/></td>
                </tr>
                <tr>
                    <td ><label><b>Suggestion:</b></label></td>
                    <td>
                      <textarea value={suggestion} onChange={handleSuggestionChange} className="form-control"/>
                    </td>
            </tr>
            <tr>
              <td colSpan="2">
                {error && <p style={{color:"red"}}>{error}</p>}
                <Button type="submit" variant="contained">Submit</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
  </div>            
  );
};

export default SuggestionForm;
