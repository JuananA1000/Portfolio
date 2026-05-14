import translate from '../../es.json';

// COMPONENTES
import Button from '../Buttons/Button';
import Mailbutton from '../Mailbutton/Mailbutton';

// IMÁGENES
import ghIcon from '../../images/svg/github.svg';
import linkedinIcon from '../../images/svg/linkedin.svg';
import foto from '../../images/img/Mias/foto.jpg';

// LINKS
import { FOTO_PERFIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from '../../constants/links';

import './Descripcion.css';

export default function Descripcion() {
  return (
    <div>
      <div className='header'>
        {/* <img src={FOTO_PERFIL_LINK} alt='foto de perfil' id='profile-photo' /> */}
        <img src={foto} alt='foto de perfil' style={{ width: '80px', height: '80px', borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', objectFit: 'cover', objectPosition: '50% 30%' }} />
        <h1>{translate['description-h1']}</h1>
      </div>
      <p>{translate['description-p']}</p>

      <div className='buttonsContainer'>
        <Button link={GITHUB_LINK} icon={ghIcon}>
          {translate['description-button-github']}
        </Button>
        <Button link={LINKEDIN_LINK} icon={linkedinIcon}>
          {translate['description-button-in']}
        </Button>

        <Mailbutton />
      </div>
    </div>
  );
}
