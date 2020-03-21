import React, {useState, useEffect} from 'react';
import './App.css';

const axios = require('axios');

const App = props => {
  const[characters, setCharacters] = useState([]);
  
  const getCharacters = () => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((res) => setCharacters(res.data.results))
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="app">
      {characters.length > 0 ?
      <div className="characters">
        {   characters.map(character => (
            <div className="single-character" style={{backgroundImage: `url(${character.image})`}}>
            <h3>{character.name}</h3>
            </div>
          ))}
      </div>
      :
        <p>Loading ...</p>
    }
    </div>
  );
  
}

export default App;
