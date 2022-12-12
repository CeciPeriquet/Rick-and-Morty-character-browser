import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss';
function CharacterCard(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article>
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        ></img>
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__description">{props.character.species}</p>
      </article>
    </Link>
  );
}

export default CharacterCard;
