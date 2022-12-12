import '../styles/App.scss';
import getDataFromApi from '../services/api';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';

function App() {
  //State
  const [characterData, setCharacterData] = useState([]);

  //Events

  //Effect
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacterData(data);
      console.log(data);
    });
  }, []);
  //Render helpers

  //RENDER
  return (
    <>
      <header className="header">
        <h1 className="hidden">Rick and Morty</h1>
      </header>
      <main className="main">
        <Filters characterData={characterData} />
        <CharacterList characterData={characterData} />
      </main>
    </>
  );
}

export default App;
