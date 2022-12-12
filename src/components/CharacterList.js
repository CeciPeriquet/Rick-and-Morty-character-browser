import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

function CharacterList({ characterData }) {
  const characterElement = characterData.map((character) => (
    <li className="card" key={character.id}>
      <CharacterCard character={character} />
    </li>
  ));

  return (
    <section className="list">
      <ul className="cards">{characterElement}</ul>
    </section>
  );
}

export default CharacterList;
