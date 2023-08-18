import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm'

function AdminPage() {
  const loginStatus = useSelector((state) => state.login);

  useEffect(()=>{
    console.log('login Status - '+loginStatus)
  })

  return (
    <div className='container-fluid'>
        <h3>Admin Page</h3>

        {!loginStatus && <LoginForm/>}

        {loginStatus && <div>Admin Logged In</div>}

    </div>
  )
}

export default AdminPage