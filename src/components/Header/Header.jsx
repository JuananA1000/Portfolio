import { useState, useEffect } from 'react';
import translate from '../../es.json';

import './Header.css';

export default function Header() {
  // PENDIENTE: Este componente AÚN no se usa, pero será útil para cuando se haga el modo oscuro.

  const [isTransparent, setIsTransparent] = useState(false);

  const elementStyle = {
    opacity: isTransparent ? 0.7 : 1,
  };

  const modoNoche = () => console.log('este botón será para cuando se cree el modo oscuro');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <nav className='header-nav' style={elementStyle}>
        <a href='/home'>{translate['header-home']}</a>
        <a href='/projects'>{translate['header-projects']}</a>
        <a href='/about'>{translate['header-about']}</a>
        <button onClick={modoNoche}>n</button>
      </nav>
    </header>
  );
}
