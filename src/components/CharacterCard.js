import '../styles/components/CharacterCard.scss';
function CharacterCard(props) {
  return (
    <li className="card" key={props.index}>
      <a href={props.user.id}>
        <img
          className="card__img"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        ></img>
        <h4 className="card__title">{props.user.name}</h4>
        <p className="card__description">{props.user.species}</p>
      </a>
    </li>
  );
}

export default CharacterCard;
