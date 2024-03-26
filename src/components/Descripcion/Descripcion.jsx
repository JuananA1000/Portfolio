import translate from '../../es.json';

export default function Descripcion() {
  return (
    <div>
      <h1>{translate['description-h1']}</h1>
      <p>{translate['description-p']}</p>
    </div>
  );
}
