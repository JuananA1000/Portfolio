import calcCoctel from '../images/img/calcCoctel.png';
import caraOCruz from '../images/img/caraOCruz.png';
import salaDeCine from '../images/img/salaDeCine.png';
import snake from '../images/img/snake.png';
import dado from '../images/img/dado.png';

const projects = [
  {
    id: 1,
    url: 'https://calculadora-de-cocteles.netlify.app/',
    appName: 'Calculadora de cócteles',
    description:
      'Con esta aplicación podrás elaborar tus cócteles favoritos con las recetas originales. Construida con TheCocktailDBAPI.',
    img: calcCoctel,
  },
  {
    id: 2,
    url: 'https://cara-o-cruz.netlify.app/',
    appName: 'Cara o cruz',
    description:
      'Desafía al azar en este juego emocionante de decisiones: Cara o Cruz. ¡Elige sabiamente y deja que la moneda decida tu destino!',
    img: caraOCruz,
  },
  {
    id: 3,
    url: 'https://sala-de-cine.netlify.app/',
    appName: 'Sala de cine',
    description:
      'Sumérgete en la magia del cine en nuestra sala, donde cada proyección es una ventana a un mundo de emociones. ¡Vive la experiencia del séptimo arte!',
    img: salaDeCine,
  },
  {
    id: 4,
    url: 'https://snakeja.netlify.app/',
    appName: 'Snake',
    description:
      'Una réplica del famoso Snake de mediados de los setenta. Alimenta a la serpiente y hazla crecer, pero ¡cuidado con las paredes y tu propio cuerpo!.',
    img: snake,
  },
  {
    id: 5,
    url: 'https://tirar-dado.netlify.app/',
    appName: 'Tirar Dados',
    description:
      '¡Diversión sin límites con un solo lanzamiento! Explora la adrenalina del azar y la estrategia en cada tirada. ¡Desafía al destino y sumérgete en un mundo de... 6 posibilidades con solo un movimiento!',
    img: dado,
  },
];

export default projects;
