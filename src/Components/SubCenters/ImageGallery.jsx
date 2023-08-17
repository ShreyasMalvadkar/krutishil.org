import React, { useState, useEffect } from 'react';
import './ImageGallery.css'; // You can create this CSS file for styling

const ImageGallery = ({images}) => {
  
  // const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);
  
  // useEffect(() => {
  //   // Simulate fetching images from a folder
  //   console.log(imagesLocation)
  //   const imagePaths = imagesLocation;
  //   setImages(imagePaths);
  // }, []);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowFullscreen(true);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleKeyDown = (event) => {
    if (showFullscreen) {
      if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }else if (event.key === 'Escape') {
        setShowFullscreen(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showFullscreen]);

  return (
    <div className="image-viewer">
      {images?.map((image, index) => (
        <img
          key={index}
          src={require(`${image}`)}
          alt={`Img ${index}`}
          className="thumbnail"
          onClick={() => handleImageClick(index)}
        />
      ))}
      {showFullscreen && (
        <div className="fullscreen-overlay">
            <button className="cancel-button" onClick={() => setShowFullscreen(false)}>
            &#10005;
          </button>
          <span className="arrow prev p-2" onClick={handlePrevImage}>
            &#8249;
          </span>

          <img src={require(`${images[currentIndex]}`)} alt={`Img ${currentIndex}`} className="fullscreen-image" />
          <span className="arrow next p-2" onClick={handleNextImage}>
            &#8250;
          </span>
          </div> 
      )}
    </div>
  );
};

export default ImageGallery;
