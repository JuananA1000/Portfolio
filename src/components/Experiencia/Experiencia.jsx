import { useState } from 'react';
import translate from '../../es.json';
import experiencia from '../../images/svg/experiencia.svg';
import empleos from '../../data/empleosData';

import './Experiencia.css';

export default function Experiencia() {
  const [mostrarEmpleos, setMostrarEmpleos] = useState(false);

  const toggleShowAll = () => {
    setMostrarEmpleos(!mostrarEmpleos);
  };

  return (
    <div>
      <div className='experiencia-header'>
        <img src={experiencia} alt='experiencia.svg' id='experiencia-img' />
        <h2>{translate['experience-h2']}</h2>
      </div>

      {empleos.slice(0, mostrarEmpleos ? empleos.length : 2).map((empleo, index) => (
        <div className='empleo' key={index}>
          <div>
            <h4 className='contenido-empleo'>{empleo.puesto}</h4>
            <p className='contenido-empleo'>{empleo.nomEmpresa}</p>
            <p className='contenido-empleo' id='fecha-empleo'>
              {empleo.fecha}
            </p>
          </div>

          <div>
            {empleo.descripcion.map((tarea, index) => (
              <p className='contenido-empleo' key={index}>
                {tarea}
              </p>
            ))}
          </div>
        </div>
      ))}

      {empleos.length > 2 && (
        <span className='ver-mas-o-menos' onClick={toggleShowAll}>
          {mostrarEmpleos ? 'Ver menos' : `Ver más (${empleos.length - 2})`}
        </span>
      )}
    </div>
  );
}
