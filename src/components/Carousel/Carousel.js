import React, { useState } from 'react';
import './Carousel.css'; 
import image1 from '../../assets/images/images.jfif';
import image2 from '../../assets/images/1366_2000.jpeg';
import image3 from '../../assets/images/the-gym-maui.jpg';

const images = [image1, image2, image3];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div
        className="carousel-images-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;