import React from 'react'
import pravartakDoc from '../documents/Pravartak.pdf'


const Pravartak = () => {

  return (
    <div className="container-fluid center">
        <object data={pravartakDoc} title="Contacts file"  className="row"
        width="1000px" height="538px"/>                  
    </div>          
  )
}

export default Pravartak