import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginStatus } from '../../actions';
import '../General/modal.css';
import './loginform.css';


function LoginForm (){
  const dispatch = useDispatch();
  const navigate=useNavigate();
  
  const [msg,setMsg]=useState("");

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form data
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Update errors state
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Your form submission logic here

      axios.post('http://localhost:3001/api/login', formData)
      .then(function (response) {
        console.log(response.status);
        if(response.status===200)
        {
          setMsg("");
          dispatch(setLoginStatus(true));
        }
        else
        {
          alert("Login Failed")
          setMsg("Login Failed. Enter correct Details");
        }
      })
      .catch(function (error) {
        console.log(error);
        setMsg("Login Failed. Someting Went Wrong.");
      });

      // sessionStorage.setItem("login_status", process.env.LoginKey);
      // console.log('Form submitted successfully');
    }
  };

  const handleCancel=()=>{
    navigate("/");
  }


  return (
      <div className='bgImg center container-fluid p-5'>
        <div className='shadow p-2 glass-effect'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <table className='table table-light table-stripped shadow'>
                  <th colSpan={2} style={{color:"red"}}>{msg}</th>
                    <tbody className='text-center'>
                        <tr>
                            <td><h5>Username:</h5></td>
                            <td><input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder='Enter Username'
                                />
                                <span style={{color:'red'}}>{errors.username && <div className="error">{errors.username}</div>}</span>
                                </td>
                        </tr>
                        <tr>
                            <td><h5>Password:</h5></td>
                            <td><input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='Enter password'
                                />
                                <span style={{color:'red'}}>{errors.password && <div className="error">{errors.password}</div>}</span>
                                </td>
                        </tr>
                        <tr >
                            <td>
                                <Button type="submit" color="success" variant="contained">Submit</Button>
                            </td>
                            <td>
                                <Button onClick={handleCancel} color="error" variant="contained">Cancel</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
      </div>
  );
};

export default LoginForm;
