import translate from '../../es.json';
import about from '../../images/svg/about.svg';

import './About.css';

export default function About() {
  return (
    <div>
      <div className='about-header'>
        <img src={about} alt='about.svg' id='about-img' />
        <h2>{translate['about-h2']}</h2>
      </div>
      About
    </div>
  );
}
