import React from 'react'
import contactsDoc from "../documents/Contacts.pdf"

const Contacts = () => {
  return (
    
    <div className="container-fluid center" >
        <object data={contactsDoc} title="Contacts file"  width="1000px" height="538px"/>
    </div>
  )
}

export default Contacts