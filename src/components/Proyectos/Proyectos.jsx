import translate from '../../es.json';

// COMPONENTES
import Button from '../../components/Buttons/Button.jsx';
import ImageCarousel from './ImageCarousel.jsx';

// IMÁGENES
import proyectos from '../../images/svg/proyectos.svg';
import ghIcon from '../../images/svg/github.svg';
import buscadorImagenes from '../../images/img/ProyectosGrandes/buscadorImagenes.png';
import fruteReact from '../../images/img/ProyectosGrandes/fruteReactLogo.png';
import reacType from '../../images/img/ProyectosGrandes/reacType2.png';
import contentManager from '../../images/img/ProyectosGrandes/contentManager.png';

// LINKS
import {
  BUSCA_IMAGENES_LINK,
  BUSCA_IMAGENES_CODE_LINK,
  CONTENT_MANAGER_LINK,
  CONTENT_MANAGER_CODE_LINK,
  REACTYPE_LINK,
  REACTYPE_CODE_LINK,
} from '../../constants/links';

// DATA
import projects from '../../data/proyectosData';

import './Proyectos.css';

export default function Proyectos() {
  return (
    <div className='proyectos-component'>
      <div className='proyectos-header'>
        <img src={proyectos} alt='about.svg' id='proyectos-icon' />
        <h2>{translate['projects-h2']}</h2>
      </div>

      <p>{translate['projects-description']}</p>

      {/* Proyectos con REACT */}
      <div className='espacio-proyectos'>
        <div className='proyecto-react' id='reactype-id'>
          <a href={REACTYPE_LINK} target='_blank'>
            <img src={reacType} alt='reacType.png' width={400} title={'ReacType'} />
          </a>
          <div>
            <div className='encabezado'>
              <h3>{translate['projects-react-reactype-h3']}</h3>
              <Button icon={ghIcon} link={REACTYPE_CODE_LINK}>
                {translate['projects-react-code-button']}
              </Button>
            </div>
            <p>{translate['projects-react-reactype']}</p>
          </div>
        </div>

        <div className='proyecto-react'>
          <div>
            <div className='encabezado'>
              <h3>{translate['projects-react-content-manager-h3']}</h3>
              <Button icon={ghIcon} link={CONTENT_MANAGER_CODE_LINK}>
                {translate['projects-react-code-button']}
              </Button>
            </div>
            <p>{translate['projects-react-content-manager']}</p>
          </div>
          <a href={CONTENT_MANAGER_LINK} target='_blank'>
            <img src={contentManager} alt='fruteReactLogo.png' width={300} title={'FruteReact'} />
          </a>
        </div>

        <div className='proyecto-react' id='buscaimg-id'>
          <a href={BUSCA_IMAGENES_LINK} target='_blank'>
            <img src={buscadorImagenes} alt='buscadorImagenes.png' width={300} title={'Buscador de imágenes'} />
          </a>
          <div>
            <div className='encabezado'>
              <h3>{translate['projects-react-search-images-h3']}</h3>
              <Button icon={ghIcon} link={BUSCA_IMAGENES_CODE_LINK}>
                {translate['projects-react-code-button']}
              </Button>
            </div>

            <p>{translate['projects-react-search-images']}</p>
          </div>
        </div>
      </div>

      {/* Proyectos con HTML, CSS, y JS */}
      <p>{translate['projects-more-projects']}</p>
      <ImageCarousel images={projects} />
    </div>
  );
}
