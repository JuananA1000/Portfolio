import { useState } from 'react';
import translate from '../../es.json';
import leftArrow from '../../images/svg/leftArrow.svg';
import rightArrow from '../../images/svg/rightArrow.svg';

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
      <button className='flecha-otro-proyecto' onClick={goToPrevious}>
        <img className='arrows' src={leftArrow} width={20} />
      </button>
      <figure>
        <a href={images[currentIndex].url} target='_blank' rel='noopener noreferrer'>
          <img
            className='more-projects'
            src={images[currentIndex].img}
            alt={images[currentIndex].appName}
            width='200'
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
      <button className='flecha-otro-proyecto' onClick={goToNext}>
        <img className='arrows' src={rightArrow} width={20} />
      </button>
    </div>
  );
};

export default ImageCarousel;