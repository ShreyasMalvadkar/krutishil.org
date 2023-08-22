import React from 'react'
import AboutUsData from './AboutUsData.json'

function AboutUs() {
  return (
    <div>
        <h4 className='p-2'>About Us</h4>
        <table className='table table-light table-bordered table-striped table-hover table-md'>
            <tbody className='h5'>
                <tr>
                    <td><b>{AboutUsData.Organization_NameMR}</b></td>
                </tr>  
                <tr>
                    <td>{AboutUsData.Detail}</td>
                </tr>           
                <tr>
                    <td>Email Id: <b>{AboutUsData.Email}</b></td>
                </tr>
                <tr>
                    <td>Address : {AboutUsData.Address}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AboutUs