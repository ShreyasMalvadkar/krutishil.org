import React, { useState } from 'react'
import nirdeshDoc from '../documents/Nirdesh.pdf'
import PdfViewer from '../General/PdfViewer'

const Nirdesh = () => {
 

  return (
    <div className="container-fluid center" >
        <embed src={nirdeshDoc} title="Contacts file"  width="1000px" height="538px"/>
        {/* <PdfViewer pdfSrc={nirdeshDoc} /> */}
    </div>
                
  )
}

export default Nirdesh