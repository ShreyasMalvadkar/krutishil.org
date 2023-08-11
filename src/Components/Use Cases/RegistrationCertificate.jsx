import React from 'react'
import AsstRegCertificate from '../images/AssistantRegistrar.jpg'
import CharRegCertificate from '../images/CharityCommissioner.jpg'

const RegistrationCertificate = () => {
  return (
  <div className="container-fluid center">
    <div className='row center' style={{ height:"538px"}}> 
      <div className='col'>
        <img src={AsstRegCertificate} className="img-fluid shadow" alt='AsstRegCertificate'/>
      </div>
      <div className='col'>
        <img src={CharRegCertificate} className="img-fluid shadow" alt='CharRegCertificate'/>
      </div>
    </div>
</div>               
                
  )
}

export default RegistrationCertificate