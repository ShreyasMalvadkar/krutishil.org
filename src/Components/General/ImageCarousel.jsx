import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

const ImageCarousel = ({ directory }) => {

  const [fileList,setFileList]=useState();
  const [currentImage,setCurrentImage]=useState("");
  const [index,setIndex]=useState(0)

  const path='../documents/pravartak/'

    const fetchImages = async () => {
      
      try {
        axios.get('http://localhost:3001/api/files/'+directory)
              .then(response => {
                  // Handle response
                  console.log(response.data);
                  setFileList(response.data)
              })
              .catch(err => {
                  // Handle errors
                  console.error(err);
              });
        // console.log("------------- "+response);
        // setFileList(response.data);
              setTimeout();
      } catch (error) {
        console.error('Error reading images:', error);
      }
    };

    function handleChangeImages(){
      setCurrentImage(fileList[index]);
      // console.log(fileList[index]);
    }

    function handelIndex(){
      handleChangeImages();
        setIndex(index+1);
    }

    setTimeout(handelIndex(), 4000);

  useEffect(()=>{
    fetchImages();
  },[directory])

  return (
    // <div className="carousel-container">
    //   <Carousel showThumbs={false}>
    //     {fileList?.map((image, index) => (
    //       <div key={index}>
    //         <img src={path+image} alt={`Showing img ${index}`} />
    //       </div>
    //     ))}
    //   </Carousel>
    // </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          {/* <div class="carousel-item active">
            <img class="d-block w-100" src="..." alt="First slide"/>
          </div> */}
               <div style={{display:currentImage?"none":"block"}}>
                <div class="carousel-item">
                  <img class="d-block w-100" src={currentImage} alt="Second slide"/>
                </div>
               </div>
          
          {/* <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide"/>
          </div> */}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>
  );
};

export default ImageCarousel;
