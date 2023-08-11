import React from 'react'
import AsstRegCertificate from '../images/AssistantRegistrar.jpg'
import CharRegCertificate from '../images/CharityCommissioner.jpg'

const RegistrationCertificate = () => {
  return (
  <div className="container-fluid center">
    <div className='row center'> 
      <div className='col-lg-6'>
        <img src={AsstRegCertificate} className="img-fluid shadow" alt='AsstRegCertificate'/>
      </div>
      <div className='col-lg-6'>
        <img src={CharRegCertificate} className="img-fluid shadow" alt='CharRegCertificate'/>
      </div>
    </div>
</div>               
                
  )
}

export default RegistrationCertificate