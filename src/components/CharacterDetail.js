import '../styles/components/CharacterDetail.scss';
import { useParams } from 'react-router-dom';
import ufo from '../images/ufo.png';
import globe from '../images/globe.png';
import portal from '../images/rick_and_morty_portal.png';
import NotFound from './NotFound';

function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);

  const handleBack = () => {
    window.history.back();
  };

  if (characterFound !== undefined) {
    return (
      <div className="detail__page">
        <article className="detail">
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
              alt="species"
            />
          </div>
        </article>
        <div className="back">
          <img className="back__img" src={portal} alt="Rick and Morty portal" />
          <button className="back__btn" onClick={handleBack}>
            <p className="back__btn-text">We'd better go back, Morty.</p>
          </button>
        </div>
      </div>
    );
  } else {
    return <NotFound errorMessage={'Wrong dimension!'} />;
  }
}

export default CharacterDetail;
