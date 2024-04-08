import translate from '../../es.json';

import './Header.css';

export default function Header() {
  const modoNoche = () => console.log('este botón será para cuando se cree el modo oscuro');

  return (
    <header>
      <nav className='header-nav'>
        <a href='/home'>{translate['header-home']}</a>
        <a href='/projects'>{translate['header-projects']}</a>
        <a href='/about'>{translate['header-about']}</a> 
        <button onClick={modoNoche}>n</button>
      </nav>
    </header>
  );
}
