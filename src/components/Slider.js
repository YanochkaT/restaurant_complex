import React, { useState } from 'react';
import '../css/index.css'; // Import the CSS file

import slide1 from '../images/slider/burger-design-template-32330edc9872179c9d7a6040a9ff6a88_screen.jpg';
import slide2 from '../images/slider/delicious-burger-advertising-white-and-yellow-design-template-b11c8252fdfe88df79d8437f4488e372_screen.jpg';
import slide3 from '../images/slider/grand-opening-banner-facebook-shared-image-design-template-617849b1c44358ff8705a3da438a79e3_screen.jpg';





const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define an array of image URLs
  const images = [
    <img src= {slide1} />,
    <img src= {slide2} />,
    <img src= {slide3} />
    ]

  const nextSlide = () => {
    // Update the current slide index to move to the next image
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    // Update the current slide index to move to the previous image
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="main_baner">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider_navigation">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slider;




/*


function Slider() {
    return(
      <div class="main_baner">

      <div className='slider'>
        <img id="slide-1" src="C:/Users/Admin/Desktop/slider/grand-opening-banner-facebook-shared-image-design-template-617849b1c44358ff8705a3da438a79e3_screen.jpg" alt="this should be a slider"/>
        <img id="slide-2" src="C:/Users/Admin/Desktop/slider/delicious-burger-advertising-white-and-yellow-design-template-b11c8252fdfe88df79d8437f4488e372_screen.jpg" alt="this should be a slider"/>
        <img id="slide-3" src="C:/Users/Admin/Desktop/slider/burger-design-template-32330edc9872179c9d7a6040a9ff6a88_screen.jpg" alt="this should be a slider"/>
        <img id="slide-4" src="C:/Users/Admin/Desktop/slider/dw21batch4-sasi-42.png" alt="this should be a slider"/>
        </div>

        <div className="slider-nav">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
        <a href="#slide-4"></a>
      </div>
    </div> 
    );
  }
  export default Slider;
*/
