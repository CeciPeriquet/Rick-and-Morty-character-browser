import '../styles/App.scss';
import logo from '../images/rick_morty_logo.png';
import getDataFromApi from '../services/api';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

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

  //Filters

  const filteredCharacters = characterData.filter((character) =>
    character.name.toLowerCase().includes(searchByName.toLowerCase())
  );

  const findCharacter = (id) => {
    return characterData.find(
      (character) => parseInt(character.id) === parseInt(id)
    );
  };

  //RENDER
  return (
    <>
      <header className="header">
        <h1 className="hidden">Rick and Morty</h1>
        <img
          className="header__img"
          src={logo}
          alt="Rick and Morty logo"
          title="Rick and Morty"
        />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  characterData={filteredCharacters}
                  handleSearch={handleSearch}
                />
                <CharacterList characterData={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:characterId"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
