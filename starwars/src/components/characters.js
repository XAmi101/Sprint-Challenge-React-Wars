import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './characterCard';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
      axios.get('https://swapi.co/api/people/')

      .then (response => {
          const newCharacter = response.data.results;
          setCharacters(newCharacter);
          console.log(newCharacter);
      });

  },[]);

  return (
      <div className='character-container'>
          {characters.map((character, index) =>
              <CharacterCard key={index} name={character.name} birth_year={character.birth_year} height={character.height} gender={character.gender} eye_color={character.eye_color} />)}
          }

      </div>
  )
  }
  export default Characters;
