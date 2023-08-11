import React from 'react'
import AdminReport22_23 from "../documents/AdministrativeReport2022-23.pdf";

const SecretaryReport = () => {
  return (
    <div className='container-fluid center'>
        <object data={AdminReport22_23} title="Contacts file" 
                        width="1000px" height="538px"/>   
    </div>
  )
}

export default SecretaryReport