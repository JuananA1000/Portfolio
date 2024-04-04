import { useState } from 'react';
import translate from '../../es.json';
import projects from '../../data/proyectosData';

// ICONOS
import proyectos from '../../images/svg/proyectos.svg';
import leftArrow from '../../images/svg/leftArrow.svg';
import rightArrow from '../../images/svg/rightArrow.svg';

// IMÁGENES
import fruteReact from '../../images/img/fruteReactLogo.png';
import buscadorImagenes from '../../images/img/buscadorImagenes.png';

// LINKS
import { BUSCA_IMAGENES_LINK, FRUTEREACT_LINK } from '../../constants/links';

import './Proyectos.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button className='otro-proyecto' onClick={goToPrevious}>
        <img className='arrows' src={leftArrow} width={20} />
      </button>
      <figure>
        <a href={images[currentIndex].url} target='_blank' rel='noopener noreferrer'>
          <img
            src={images[currentIndex].img}
            alt={images[currentIndex].appName}
            width='200'
            title={images[currentIndex].appName}
          />
        </a>
        <figcaption>{projects[currentIndex].appName}</figcaption>
      </figure>
      <p id='descripcion'>{projects[currentIndex].description}</p>
      <button className='otro-proyecto' onClick={goToNext}>
        <img className='arrows' src={rightArrow} width={20} />
      </button>
    </div>
  );
};

export default function Proyectos() {
  return (
    <div>
      <div className='proyectos-header'>
        <img src={proyectos} alt='about.svg' id='proyectos-img' />
        <h2>{translate['projects-h2']}</h2>
      </div>

      <p>{translate['projects-description']}</p>

      {/* Proyectos con REACT */}
      {/* PENDIENTE: centrar esto en pantalla, los proyectos estarán en vertical */}
      <div className='espacio-proyectos'>
        <div className='proyecto-react'>
          <a href={FRUTEREACT_LINK} target='_blank'>
            <img src={fruteReact} alt='fruteReactLogo.png' width={200} />
          </a>
          <p>{translate['projects-react-frutereact']}</p>
        </div>

        <div className='proyecto-react'>
          <p>{translate['projects-react-search-images']}</p>
          <a href={BUSCA_IMAGENES_LINK} target='_blank'>
            <img src={buscadorImagenes} alt='buscadorImagenes.png' width={200} />
          </a>
        </div>
      </div>

      {/* Proyectos con HTML, CSS, y JS */}
      <p>{translate['projects-more-projects']}</p>
      <ImageCarousel images={projects} />
    </div>
  );
}
