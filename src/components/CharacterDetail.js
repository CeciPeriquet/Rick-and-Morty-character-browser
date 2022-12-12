import { Link, useParams } from 'react-router-dom';
function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  console.log(characterFound);

  return (
    <>
      <Link to="/"> Volver </Link>
      <article className="card">
        <img
          className="card__img"
          src={characterFound.image}
          alt={`Foto de ${characterFound.name}`}
          title={`Foto de ${characterFound.name}`}
        />
        <h4 className="card__title">{characterFound.name}</h4>
        <p className="card__description">{characterFound.status}</p>
        <p className="card__description">{characterFound.species}</p>
        <p className="card__description">{characterFound.origin}</p>
        <p className="card__description">{characterFound.episode}</p>
      </article>
    </>
  );
}

export default CharacterDetail;
