import translate from '../../es.json';

import './Header.css'

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <a href='/home'>{translate['header-home']}</a>
        <a href='/projects'>{translate['header-projects']}</a>
        <a href='/about'>{translate['header-about']}</a>
        <a href='/contact'>{translate['header-contact']}</a>
        <button>n</button>
      </nav>
    </header>
  );
}
