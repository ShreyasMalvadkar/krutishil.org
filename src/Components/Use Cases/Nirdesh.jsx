import React from 'react'
import nirdeshDoc from '../documents/Nirdesh.pdf'

const Nirdesh = () => {
  return (
    <div className="container-fluid center" >
        <embed src={nirdeshDoc} title="Contacts file"  width="1000px" height="538px"/>
    </div>
                
  )
}

export default Nirdesh