import React from 'react';
import { NavLink} from 'react-router-dom';
import DigitalClock from '../General/DigitalClock';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/List';
import "./Homepage.css";
import krutishilLogo from "../images/main_logo.png"
import subcentersNames from "./Subcenters.json";


const Homenavbar = () => {
  return (<>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div class="container-fluid center">
  <img src={krutishilLogo} style={{maxWidth:"30%",height:"auto"}} alt='Logo'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink className="nav-link active center" aria-current="page" to="/" title='Home'><HomeIcon color="primary"/>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active center" to="/Contacts" title='Contact Page'><ContactPageIcon color="primary" />संपर्क (Contacts)</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active center" to="#" title='About Us'><InfoIcon color="primary" />आमच्याबद्दल (About Us)</NavLink>
        </li>
        <li className="nav-item dropdown center">
          <NavLink className="nav-link dropdown-toggle center" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" title='Sub Centers' aria-expanded="false">
            <ListIcon color="primary"/>उपकेंद्रे (Sub Centers)
          </NavLink>
          <ul className="dropdown-menu scrollable-menu" role="menu" aria-labelledby="navbarDropdown" style={{overflowX:"scroll", maxHeight:"70vh"}}>
            {subcentersNames.map((data,index)=>{
              return(<li key={index}><NavLink className="dropdown-item" to="#"><h5>{data.nameMR} ({data.nameENG})</h5></NavLink></li>);
                 })}
          </ul>
        </li>
      </ul>

      <div class="d-flex p-2 shadow rounded" style={{backgroundColor:"#D3D3D3"}}>
      <DigitalClock/>
      </div>
      
    </div>
  </div>
</nav></>

  )
}
export default Homenavbar