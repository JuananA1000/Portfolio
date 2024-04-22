import { useState } from 'react';
import translate from '../../es.json';
import projects from '../../data/proyectosData';

// ICONOS
import proyectos from '../../images/svg/proyectos.svg';
import leftArrow from '../../images/svg/leftArrow.svg';
import rightArrow from '../../images/svg/rightArrow.svg';
import ghIcon from '../../images/svg/github.svg';

// IMÁGENES
import buscadorImagenes from '../../images/img/buscadorImagenes.png';
import fruteReact from '../../images/img/fruteReactLogo.png';
import reacType from '../../images/img/reacType.png';

// COMPONENTES
import Button from '../../components/Buttons/Button.jsx';

// LINKS
import {
  BUSCA_IMAGENES_LINK,
  FRUTEREACT_LINK,
  FRUTEREACT_CODE_LINK,
  REACTYPE_LINK,
  REACTYPE_CODE_LINK,
  BUSCA_IMAGENES_CODE_LINK,
} from '../../constants/links';

import './Proyectos.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button className='flecha-otro-proyecto' onClick={goToPrevious}>
        <img className='arrows' src={leftArrow} width={20} />
      </button>
      <figure>
        <a href={images[currentIndex].url} target='_blank' rel='noopener noreferrer'>
          <img
            className='more-projects'
            src={images[currentIndex].img}
            alt={images[currentIndex].appName}
            width='200'
            title={images[currentIndex].appName}
          />
        </a>
        <figcaption>{projects[currentIndex].appName}</figcaption>
      </figure>
      <div>
        <p id='descripcion'>{projects[currentIndex].description}</p>
        <p>
          {projects[currentIndex].id}
          {translate['projects-more-projects-counter']}
          {projects.length}
        </p>
      </div>
      <button className='flecha-otro-proyecto' onClick={goToNext}>
        <img className='arrows' src={rightArrow} width={20} />
      </button>
    </div>
  );
};

export default function Proyectos() {
  return (
    <div>
      <div className='proyectos-header'>
        <img src={proyectos} alt='about.svg' id='proyectos-img' />
        <h2>{translate['projects-h2']}</h2>
      </div>

      <p>{translate['projects-description']}</p>

      {/* Proyectos con REACT */}
      <div className='espacio-proyectos'>
        <div className='proyecto-react'>
          <a href={REACTYPE_LINK} target='_blank'>
            <img src={reacType} alt='reacType.png' width={300} title={'ReacType'} />
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
              <h3>{translate['projects-react-frutereact-h3']}</h3>
              <Button icon={ghIcon} link={FRUTEREACT_CODE_LINK}>
                {translate['projects-react-code-button']}
              </Button>
            </div>
            <p>{translate['projects-react-frutereact']}</p>
          </div>
          <a href={FRUTEREACT_LINK} target='_blank'>
            <img src={fruteReact} alt='fruteReactLogo.png' width={300} title={'FruteReact'} />
          </a>
        </div>

        <div className='proyecto-react'>
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
