import translate from '../../es.json';

// IMÁGENES
import about from '../../images/svg/about.svg';
import aboutPhoto from '../../images/img/Mias/profile.jpg';
import aboutPhoto2 from '../../images/img/Mias/profile2.jpeg';

import './About.css';

export default function About() {
  return (
    <div className='about-component'>
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
            Tengo experiencia desarrollando apps en <span id='react'>ReactJS</span>. En mi actual trabajo, estoy
            desarrollando una app llamada <b>Emotinet</b>, centrada en el cuidado de la salud mental, con{' '}
            <span id='react'>ReactJS</span>, <span id='react'>React Native</span> y alguna librería más como, por
            ejemplo <span id='material-ui'>Material UI</span>.
          </p>

          <p>
            Anteriormente, estuve desarrollando una app que implementaba el concepto de <b>identidad digital</b>,
            también con <span id='react'>ReactJS</span> y con autenticación de usuarios por{' '}
            <span id='jwt'>JSON Web Token</span> y también relacionadas con la climatología con la librería{' '}
            <span id='echarts'>ECharts</span>.
          </p>

          <p>
            Además, también estoy ampliando mis conocimientos con <span id='vue'>VueJS</span> y{' '}
            <span id='angular'>AngularJS</span>.
          </p>
        </div>

        <div>
          <img src={aboutPhoto} alt='foto.png' id='about-photo' />
          <img src={aboutPhoto2} alt='foto2.png' id='drum-photo' />
        </div>
      </div>
    </div>
  );
}
