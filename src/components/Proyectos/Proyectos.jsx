import { useState } from 'react';

// IMÁGENES
import calcCoctel from '../../images/calcCoctel.png';
import caraOCruz from '../../images/caraOCruz.png';
import salaDeCine from '../../images/salaDeCine.png';

import './Proyectos.css'

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
      <a href={images[currentIndex].url} target='_blank' rel='noopener noreferrer'>
        <img
          src={images[currentIndex].img}
          alt={images[currentIndex].appName}
          width='200'
          title={images[currentIndex].appName}
        />
      </a>
      <button onClick={goToNext}>{'>'}</button>
    </div>
  );
};

const imageObjects = [
  {
    url: 'https://calculadora-de-cocteles.netlify.app/',
    appName: 'Calculadora de cócteles',
    img: calcCoctel,
  },
  {
    url: 'https://cara-o-cruz.netlify.app/',
    appName: 'Cara o cruz',
    img: caraOCruz,
  },
  {
    url: 'https://sala-de-cine.netlify.app/',
    appName: 'Sala de cine',
    img: salaDeCine,
  },
];

export default function Proyectos() {
  return (
    <div>
      <h2>Proyectos</h2>
      <ImageCarousel images={imageObjects} />
    </div>
  );
}
