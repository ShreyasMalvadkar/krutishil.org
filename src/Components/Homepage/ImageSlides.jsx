import React from 'react'
import mh_mr from '../images/mahamap_marathi.jpg';
import mh_en from '../images/mahamap_english.png';
import logo from '../images/logo.png';
import ksa_logo from '../images/ksa_logo.jpg'




function ImageSlides() {

  return (
      <div id="carouselExampleControls" className="carousel slide center shadow carousel-fade" data-ride="carousel" data-interval="9000">
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img className="img-fluid rounded" src={logo} alt="First slide" style={{filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"}}/>
          </div>

          <div className="carousel-item">
            <img className="img-fluid rounded" src={mh_mr} alt="Second slide"/>
          </div>

          <div className="carousel-item">
            <img className="img-fluid rounded" src={ksa_logo} alt="Third slide"/>
          </div>

          <div className="carousel-item">
            <img className="img-fluid rounded" src={mh_en} alt="Fourth slide"/>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  )
}

export default ImageSlides