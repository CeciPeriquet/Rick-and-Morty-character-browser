import '../styles/App.scss';
import getDataFromApi from '../services/api';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';

function App() {
  //State
  const [characterData, setCharacterData] = useState([]);
  const [searchByName, setSearchByName] = useState('');

  //Events

  const handleSearch = (value) => {
    setSearchByName(value);
  };

  //Effect
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacterData(data);
    });
  }, []);
  //Render helpers

  const filteredCharacters = characterData.filter((character) =>
    character.name.toLowerCase().includes(searchByName.toLowerCase())
  );
  //RENDER
  return (
    <>
      <header className="header">
        <h1 className="hidden">Rick and Morty</h1>
      </header>
      <main className="main">
        <Filters
          characterData={filteredCharacters}
          handleSearch={handleSearch}
        />
        <CharacterList characterData={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
