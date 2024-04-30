import translate from '../../es.json';

// IMÁGENES
import about from '../../images/svg/about.svg';
import aboutPhoto from '../../images/img/profile.jpg';

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
            <b>Me llamo Juan Antonio pero, para abreviar, llámame Juan</b>. Empecé en la programación en 2018, cuando vi
            que este mundillo tenía infinidad de salidas laborales.
          </p>

          <p>
            Actualmente estoy buscando empleo de <b>Front Developer</b>.
          </p>

          <p>
            <b>Tengo un año de experiencia</b> desarrollando apps en <span id='react'>ReactJS</span>. En primer lugar,
            desarrollé apps relacionadas con el sector de la climatología, <span id='html'>HTML</span>, y{' '}
            <span id='css'>CSS</span>. Además utilicé <b>APIs externas y propias</b>. Tiempo después estuve
            desarrollando una app que implementaba el concepto de <b>identidad digital</b>, también con{' '}
            <span id='react'>ReactJS</span>.
          </p>

          <p>
            En cuanto a mi experiencia, he desarrollado apps relacionadas con el sector de la climatología con{' '}
            <span id='react'>ReactJS</span>, incluyendo <span id='html'>HTML</span>, y <span id='css'>CSS</span>. Además
            utilicé APIs externas y propias. Tiempo después estuve desarrollando una app que implementaba el concepto de{' '}
            <b>identidad digital</b>, también con <span id='react'>ReactJS</span>.
          </p>
          <p>
            Además, también estoy ampliando mis conocimientos con <span id='vue'>VueJS</span> y{' '}
            <span id='angular'>AngularJS</span>.
          </p>
        </div>

        <img src={aboutPhoto} alt='foto-prevista.jpg' id='about-photo' />
      </div>
    </div>
  );
}
