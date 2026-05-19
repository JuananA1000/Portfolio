import { useEffect, useState } from 'react';
import translate from '../../es.json';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = images[currentIndex];

  useEffect(() => {
    images.forEach((project) => {
      const preloadedImage = new Image(); // Este objeto equivale a crear varias <img/> en el DOM, pero sin renderizarlas, como en "segundo plano".
      preloadedImage.src = project.img;
    });
  }, [images]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='mas-proyectos'>
      <button className='flecha-btn left' onClick={goToPrevious}>
        <svg viewBox='0 0 100 100'>
          <path d='M80 15 L20 50 L80 85 Z' />
        </svg>
      </button>

      <figure className='carrusel-figure'>
        <a href={currentProject.url} target='_blank' rel='noopener noreferrer'>
          <img
            className='html-proyectos-img'
            src={currentProject.img}
            alt={currentProject.appName}
            title={currentProject.appName}
          />
        </a>
        <figcaption>{currentProject.appName}</figcaption>
      </figure>
      <div>
        <p id='descripcion'>{currentProject.description}</p>
        <p>
          {currentProject.id}
          {translate['projects-more-projects-counter']}
          {images.length}
        </p>
      </div>

      <button className='flecha-btn right' onClick={goToNext}>
        <svg viewBox='0 0 100 100'>
          <path d='M20 15 L80 50 L20 85 Z' />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
