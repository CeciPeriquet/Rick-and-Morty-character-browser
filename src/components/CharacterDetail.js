import '../styles/components/CharacterDetail.scss';
import { useParams } from 'react-router-dom';
import ufo from '../images/ufo.png';
import people from '../images/people.png';
import portal from '../images/rick_and_morty_portal.png';
import NotFound from './NotFound';

function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  const speciesIcon = () => {
    if (characterFound.species === 'Human') {
      return <img className="species-icon" src={people} alt="species" />;
    } else if (characterFound.species === 'Alien') {
      return <img className="species-icon" src={ufo} alt="species" />;
    }
  };

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
            <div className="detail__description">
              <span className="detail__description-span">species: </span>
              {speciesIcon()}
            </div>

            <p className="detail__description">
              <span className="detail__description-span">origin: </span>
              {characterFound.origin}
            </p>

            <p className="detail__description">
              <span className="detail__description-span">episodes:</span>
              {characterFound.episodes.length}
            </p>
          </div>
        </article>
        <div className="back">
          <button className="back__btn" onClick={handleBack}>
            <p className="back__btn-text">We'd better go back, Morty.</p>
          </button>
          <img className="back__img" src={portal} alt="Rick and Morty portal" />
        </div>
      </div>
    );
  } else {
    return <NotFound errorMessage={'Wrong dimension!'} />;
  }
}

export default CharacterDetail;
