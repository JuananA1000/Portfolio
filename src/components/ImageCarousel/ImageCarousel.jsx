import { useState } from 'react';
import translate from '../../es.json';
import leftArrow from '../../images/svg/leftArrow.svg';
import rightArrow from '../../images/svg/rightArrow.svg';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='mas-proyectos'>
      <button className='arrow-btn left' onClick={goToPrevious}>
        <svg viewBox='0 0 100 100'>
          <path d='M80 15 L20 50 L80 85 Z' />
        </svg>
      </button>

      <figure className='carousel-figure'>
        <a href={images[currentIndex].url} target='_blank' rel='noopener noreferrer'>
          <img
            className='more-projects'
            src={images[currentIndex].img}
            alt={images[currentIndex].appName}
            title={images[currentIndex].appName}
          />
        </a>
        <figcaption>{images[currentIndex].appName}</figcaption>
      </figure>
      <div>
        <p id='descripcion'>{images[currentIndex].description}</p>
        <p>
          {images[currentIndex].id}
          {translate['projects-more-projects-counter']}
          {images.length}
        </p>
      </div>

      <button className='arrow-btn right' onClick={goToNext}>
        <svg viewBox='0 0 100 100'>
          <path d='M20 15 L80 50 L20 85 Z' />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
