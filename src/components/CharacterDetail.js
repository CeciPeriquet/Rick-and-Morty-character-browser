import '../styles/components/CharacterDetail.scss';
import { Link, useParams } from 'react-router-dom';
function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  console.log(characterFound);

  return (
    <>
      <article className="detail">
        <img
          className="detail__img"
          src={characterFound.image}
          alt={`Foto de ${characterFound.name}`}
          title={`Foto de ${characterFound.name}`}
        />
        <div className="detail__text">
          <h4 className="detail__title">{characterFound.name}</h4>
          <p className="detail__description">{characterFound.status}</p>
          <p className="detail__description">{characterFound.species}</p>
          <p className="detail__description">{characterFound.origin}</p>
          <p className="detail__description">
            {characterFound.episodes.length}
          </p>
        </div>
        <Link to="/" className="back__btn">
          {' '}
          Volver{' '}
        </Link>
      </article>
    </>
  );
}

export default CharacterDetail;
