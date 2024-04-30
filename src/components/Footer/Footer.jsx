import { useState, useEffect } from 'react';
import translate from '../../es.json';

// IMÁGENES
import copyright from '../../images/svg/copyright.svg';

import './Footer.css';

export default function Footer() {
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const actualizaFecha = () => {
      const fechaActual = new Date();
      setFecha(fechaActual.getFullYear());
    };

    actualizaFecha();

    const intervalId = setInterval(() => {
      actualizaFecha();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <p className='all-rights'>
        <img src={copyright} alt='copyright.svg' width={12} />
        {fecha}
        {translate['footer-rights']}
      </p>
    </footer>
  );
}
