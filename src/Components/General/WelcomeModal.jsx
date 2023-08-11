import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logo from '../images/ksa_logo-no-bg.png';
import './modal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
  backgroundColor:"white",
  borderRadius:'20px'

};

export default function WelcomeModal({show}) {

  return (
      <Modal
        open={show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='logo-shadow'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            WELCOME
          </Typography>
          <br/>
          <img src={logo} width='200px' alt='logo'/>
        </Box>
      </Modal>
  );
}