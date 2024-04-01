import { useState } from 'react';

import translate from '../../es.json';

// IMÁGENES
import calcCoctel from '../../images/img/calcCoctel.png';
import caraOCruz from '../../images/img/caraOCruz.png';
import salaDeCine from '../../images/img/salaDeCine.png';

// ICONOS
import proyectos from '../../images/svg/proyectos.svg';

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
      <button onClick={goToPrevious}>{'<'}</button>
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
      <button onClick={goToNext}>{'>'}</button>
    </div>
  );
};

const imageObjects = [
  {
    url: 'https://calculadora-de-cocteles.netlify.app/',
    appName: 'Calculadora de cócteles',
    description:
      'Con esta aplicación podrás elaborar tus cócteles favoritos con las recetas originales. Construida con TheCocktailDBAPI.',
    img: calcCoctel,
  },
  {
    url: 'https://cara-o-cruz.netlify.app/',
    appName: 'Cara o cruz',
    description:
      'Desafía al azar en este juego emocionante de decisiones: Cara o Cruz. ¡Elige sabiamente y deja que la moneda decida tu destino!',
    img: caraOCruz,
  },
  {
    url: 'https://sala-de-cine.netlify.app/',
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
