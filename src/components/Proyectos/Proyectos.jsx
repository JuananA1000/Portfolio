import React, { useState } from 'react';

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
      <a href={images.url} target='blank'>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </a>
      <button onClick={goToNext}>{'>'}</button>
    </div>
  );
};

// Ejemplo de uso:

// const images = [
//   {
//     url: 'https://calculadora-de-cocteles.netlify.app/',
//     appName: 'Calculadora de cócteles',
//     img: '../../assets/images/calcCoctel.jpg',
//   },
// ];

const images = [
  'url_de_la_imagen_1.jpg',
  'url_de_la_imagen_2.jpg',
  'url_de_la_imagen_3.jpg',
  // Agrega aquí más URL de imágenes si lo deseas
];

export default function Proyectos() {
  return (
    <div>
      <h2>Proyectos</h2>
      <ImageCarousel images={images} />
    </div>
  );
}
