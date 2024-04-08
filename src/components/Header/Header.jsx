import translate from '../../es.json';
import { useState, useEffect } from 'react';

import './Header.css';

export default function Header() {
  const modoNoche = () => console.log('este botón será para cuando se cree el modo oscuro');

  const [isTransparent, setIsTransparent] = useState(false);

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

  const elementStyle = {
    opacity: isTransparent ? 0.7 : 1,
  };

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
