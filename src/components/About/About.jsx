import translate from '../../es.json';
import about from '../../images/svg/about.svg';

import photo from '../../images/img/calcCoctel.png';

import './About.css';

export default function About() {
  return (
    <div>
      <div className='about-header'>
        <img src={about} alt='about.svg' id='about-img' />
        <h2>{translate['about-h2']}</h2>
      </div>

      <div className='sobre-mi'>
        <div className='descripcion'>
          <p>
            Me llamo Juan Antonio pero, para abreviar, llámame Juan. Empecé en la programación en 2018, cuando vi que
            este mundillo tenía infinidad de salidas laborales.
          </p>

          <p>Actualmente estoy buscando empleo de FRONT DEVELOPER.</p>

          <p>
            Tengo un año de experiencia desarrollando apps en <span id='react'>ReactJS</span>. En primer lugar,
            desarrollé apps relacionadas con el sector de la climatología, <span id='html'>HTML</span>, y{' '}
            <span id='css'>CSS</span>. Además utilicé APIs externas y propias. Tiempo después estuve desarrollando una
            app que implementaba el concepto de identidad digital, también con <span id='react'>ReactJS</span>.
          </p>

          <p>
            En primer lugar, desarrollé apps relacionadas con el sector de la climatología, incluyendo{' '}
            <span id='html'>HTML</span>, y <span id='css'>CSS</span>. Además utilicé APIs externas y propias. Tiempo
            después estuve desarrollando una app que implementaba el concepto de identidad digital, también con{' '}
            <span id='react'>ReactJS</span>.
          </p>
          <p>
            Además, también estoy ampliando mis conocimientos con <span id='vue'>VueJS</span> y{' '}
            <span id='angular'>AngularJS</span>.
          </p>
        </div>

        <img src={photo} alt='foto-prevista.jpg' width='auto' height='auto' />
      </div>
    </div>
  );
}
