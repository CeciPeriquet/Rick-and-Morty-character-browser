import '../styles/components/CharacterDetail.scss';
import { Link, useParams } from 'react-router-dom';
import ufo from '../images/ufo.png';
import globe from '../images/globe.png';

function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);

  return (
    <div className="detail__page">
      <article className="detail">
        <Link to="/" className="back__btn">
          Volver
        </Link>
        <img
          className="detail__img"
          src={characterFound.image}
          alt={`Foto de ${characterFound.name}`}
          title={`Foto de ${characterFound.name}`}
        />
        <div className="detail__text">
          <h4 className="detail__title">{characterFound.name}</h4>
          <p className="detail__description">
            <span className="detail__description-span">status: </span>
            {characterFound.status}
          </p>
          <p className="detail__description">
            <span className="detail__description-span">species: </span>
            {characterFound.species}
          </p>
          <p className="detail__description">
            <span className="detail__description-span">origin: </span>
            {characterFound.origin}
          </p>
          <p className="detail__description">
            <span className="detail__description-span">episodes:</span>
            {characterFound.episodes.length}
          </p>
          <img
            className="species-icon"
            src={characterFound.species === 'Human' ? globe : ufo}
            alt={characterFound.species === 'Human' ? globe : ufo}
          />
        </div>
      </article>
    </div>
  );
}

export default CharacterDetail;
