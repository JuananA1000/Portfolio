import translate from '../../es.json';

// componentes
import Button from '../Buttons/Button';

// IMÁGENES
import linkedinIcon from '../../images/svg/linkedin.svg';
import ghIcon from '../../images/svg/github.svg';
import copyIcon from '../../images/svg/copy.svg';

import { FOTO_PERFIL_LINK } from '../../constants/links';

import './Descripcion.css';

export default function Descripcion() {
  return (
    <div>
      <div className='header'>
        <img src={FOTO_PERFIL_LINK} alt='foto de perfil' id='profile-photo' />
        <h1>{translate['description-h1']}</h1>
      </div>
      <p>{translate['description-p']}</p>

      <div className='buttonsContainer'>
        <Button link={'https://github.com/JuananA1000'} icon={ghIcon}>
          {translate['description-button-github']}
        </Button>
        <Button link={'https://www.linkedin.com/in/juan-antonio-amil-l%C3%B3pez-08705b2a9/'} icon={linkedinIcon}>
          {translate['description-button-in']}
        </Button>

        <div className='mail' onClick={navigator.clipboard.writeText('aaa')}>
          <img src={copyIcon} width={15} />
          juanantonioamillopez@gmail.com
        </div>
      </div>
    </div>
  );
}
