import { useState } from 'react';
import translate from '../../es.json';
import experiencia from '../../images/svg/experiencia.svg';

import './Experiencia.css';

export default function Experiencia() {
  const [mostrarEmpleos, setMostrarEmpleos] = useState(false);

  const toggleShowAll = () => {
    setMostrarEmpleos(!mostrarEmpleos);
  };

  const empleos = [
    {
      puesto: 'Desarrollador FrontEnd',
      fecha: 'Enero 2023',
      nomEmpresa: 'Grant Thornton',
      descripcion: [
        '- Desarrollo de aplicaciones web con ReactJS.',
        '- Maquetación UI/UX con Figma.',
        '- Diseño de interfaces web con componentes Material UI de React.',
        '- Desarrollo de aplicaciones móviles con React Native.',
      ],
    },
    {
      puesto: 'Desarrollador Web',
      fecha: 'Mayo 2022',
      nomEmpresa: 'SOFTTEK',
      descripcion: [
        '- Mantenimiento correctivo y desarrollo evolutivo de aplicaciones relacionadas con el sector de la educación',
        '- Desarrollo de aplicaciones en el servidor con tecnologías Tcl/tk.',
        '- Realización de consultas con bases de datos Oracle, incluyendo creación y modificación de tablas.',
        '- Construcción de interfaces de usuario mediante html, css y Javascript.',
      ],
    },
    {
      puesto: 'Desarrollador Web',
      fecha: 'Septiembre 2021',
      nomEmpresa: 'Aerín Sistemas',
      descripcion: [
        '- Instalación y configuración de Sistemas Operativos Linux.',
        '- Despliegue de aplicaciones con Docker.',
        '- Desarrollo de aplicaciones climáticas con tecnologías Django y Reactjs.',
        '- Elaboración de pruebas con Selenium.',
        '- Construcción de Interfaces de Usuario mediante Redux.',
      ],
    },
  ];

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
        <p className='ver-mas-o-menos' onClick={toggleShowAll}>
          {mostrarEmpleos ? 'Ver menos' : `Ver más (${empleos.length - 2})`}
        </p>
      )}
    </div>
  );
}
