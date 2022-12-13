//Styles
import '../styles/App.scss';
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
import Header from './Header';

function App() {
  //State
  const [characterData, setCharacterData] = useState([]);
  const [searchByName, setSearchByName] = useState(ls.get('search', ''));
  const [filterBySpecies, setFilterBySpecies] = useState([]);

  //Events

  const handleSearch = (value) => {
    ls.set('search', value);
    setSearchByName(value);
  };

  const handleFilterSpecies = (value) => {
    if (filterBySpecies.includes(value)) {
      const checkedSpecies = filterBySpecies.filter(
        (eachSpecies) => eachSpecies !== value
      );

      setFilterBySpecies(checkedSpecies);
    } else {
      const checkedSpecies = [...filterBySpecies, value];

      setFilterBySpecies(checkedSpecies);
    }
  };

  const handleReset = () => {
    setSearchByName('');
    setFilterBySpecies([]);
    ls.clear();
  };

  //Effect
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacterData(data);
    });
  }, []);

  //Filters

  const filteredCharacters = characterData
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .filter((character) =>
      character.name.toLowerCase().includes(searchByName.toLowerCase())
    )
    .filter((character) => {
      return filterBySpecies.length === 0
        ? true
        : filterBySpecies.includes(character.species);
    });

  const findCharacter = (id) => {
    return characterData.find(
      (character) => parseInt(character.id) === parseInt(id)
    );
  };

  //RENDER
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleSearch={handleSearch}
                  searchByName={searchByName}
                  handleFilterSpecies={handleFilterSpecies}
                  filterBySpecies={filterBySpecies}
                  handleReset={handleReset}
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
