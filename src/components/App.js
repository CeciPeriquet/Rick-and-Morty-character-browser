import '../styles/App.scss';
import logo from '../images/rick_morty_logo.png';
//Services
import getDataFromApi from '../services/api';
import ls from '../services/localstorage';
//Hooks
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//Components
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  //State
  const [characterData, setCharacterData] = useState([]);
  const [searchByName, setSearchByName] = useState(ls.get('search', ''));

  //Events

  const handleSearch = (value) => {
    ls.set('search', value);
    setSearchByName(value);
  };

  //Effect
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacterData(data);
    });
  }, []);

  //Filters

  const filteredCharacters = characterData
    .filter((character) =>
      character.name.toLowerCase().includes(searchByName.toLowerCase())
    )
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  const findCharacter = (id) => {
    return characterData.find(
      (character) => parseInt(character.id) === parseInt(id)
    );
  };

  console.log(filteredCharacters);

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
                  handleSearch={handleSearch}
                  searchByName={searchByName}
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
