import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

function CharacterList({ characterData }) {
  const characterElement = characterData.map((user, index) => {
    return <CharacterCard user={user} index={index} />;
  });
  return (
    <section className="list">
      <ul className="cards">{characterElement}</ul>
    </section>
  );
}

export default CharacterList;
