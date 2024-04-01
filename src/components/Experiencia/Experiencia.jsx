import translate from '../../es.json';
import experiencia from '../../images/svg/experiencia.svg';

import './Experiencia.css';

export default function Experiencia() {
  return (
    <div>
      <div className='experiencia-header'>
        <img src={experiencia} alt='experiencia.svg' id='experiencia-img'/>
        <h2>{translate['experience-h2']}</h2>
      </div>
      <p>Aqui mi experiencia</p>
    </div>
  );
}
