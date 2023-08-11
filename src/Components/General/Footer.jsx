import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Homepage/Homepage.css";

function Footer() {
  return (
<footer className="text-center shadow" style={{paddingTop:"10px"}}>
  {/* <!-- Grid container --> */}
  <div className="container-fluid">
    <h4>नोंदणीकृत कार्यालय : संतेश्वर सोसायटी, फ्लॅट नं.7, 106/3, डॉ.केतकर मार्ग, जुन्या कलमाडी शाळेसमोर, एरंडवणा, पुणे 411004</h4>
    <h5>(शासन मान्यता सहाय्यक निबंधक, पुणे नोंदणी क्र.1151 दि.31/5/2014 व धर्मादाय आयुक्त, पुणे नोंदणी क्र. फ-48300 दि.23/03/2017)</h5>
    {/* <!-- Section: Social media --> */}
    <section >
      {/* <!-- Facebook --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i></a>

      {/* <!-- Twitter --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i></a>

      {/* <!-- Google --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i></a>

              {/* <!-- Youtube --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-youtube"></i></a>

      {/* <!-- Instagram -->
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i></a>

      <!-- Linkedin -->
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i></a>
        
      <!-- Github -->
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i></a> */}
    </section>
    {/* <!-- Section: Social media --> */}
      {/* <!-- Copyright --> */}
  <div className="text-dark p-1">
    ©{new Date().getFullYear()}&nbsp;<NavLink className="text-dark" to="/">Krutishil Organization</NavLink>
  </div>
  </div>
  {/* <!-- Grid container --> */}


  {/* <!-- Copyright --> */}
</footer>
);
}

export default Footer;