import { useState } from 'react';

import translate from '../../es.json';

// IMÁGENES
import calcCoctel from '../../images/img/calcCoctel.png';
import caraOCruz from '../../images/img/caraOCruz.png';
import salaDeCine from '../../images/img/salaDeCine.png';

// ICONOS
import proyectos from '../../images/svg/proyectos.svg';
import leftArrow from '../../images/svg/leftArrow.svg';
import rightArrow from '../../images/svg/rightArrow.svg';

import { CALC_COCTEL_LINK, CARA_O_CRUZ_LINK, SALA_DE_CINE_LINK } from '../../constants/links';

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
        <figcaption>{imageObjects[currentIndex].appName}</figcaption>
      </figure>
      <p id='descripcion'>{imageObjects[currentIndex].description}</p>
      <button className='otro-proyecto' onClick={goToNext}>
        <img className='arrows' src={rightArrow} width={20} />
      </button>
    </div>
  );
};

const imageObjects = [
  {
    url: CALC_COCTEL_LINK,
    appName: 'Calculadora de cócteles',
    description:
      'Con esta aplicación podrás elaborar tus cócteles favoritos con las recetas originales. Construida con TheCocktailDBAPI.',
    img: calcCoctel,
  },
  {
    url: CARA_O_CRUZ_LINK,
    appName: 'Cara o cruz',
    description:
      'Desafía al azar en este juego emocionante de decisiones: Cara o Cruz. ¡Elige sabiamente y deja que la moneda decida tu destino!',
    img: caraOCruz,
  },
  {
    url: SALA_DE_CINE_LINK,
    appName: 'Sala de cine',
    description:
      'Sumérgete en la magia del cine en nuestra sala, donde cada proyección es una ventana a un mundo de emociones. ¡Vive la experiencia del séptimo arte!',
    img: salaDeCine,
  },
];

export default function Proyectos() {
  return (
    <div>
      <div className='proyectos-header'>
        <img src={proyectos} alt='about.svg' id='proyectos-img' />
        <h2>{translate['projects-h2']}</h2>
      </div>

      <p>{translate['projects-description']}</p>

      <div className='espacio-proyectos'>
        {/* 
          PENDIENTE: Aquí todos mis proyectos de ReactJS
        */}
      </div>

      <p>{translate['projects-more-projects']}</p>
      <ImageCarousel images={imageObjects} />
    </div>
  );
}
