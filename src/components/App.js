import '../styles/App.css';
import getDataFromApi from '../services/api';
import { useState, useEffect } from 'react';

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
      <main className="main"></main>
    </>
  );
}

export default App;
