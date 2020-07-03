import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import CharacterCard from './CharacterCard';

import swapi from '../../services/swapi';

import { Container, Content } from './styles';

interface Character {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
  url: string;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getCharacters() {
      const response = await swapi.get(`/people/?page=${page}`);

      console.log(response.data.results);
      setCharacters(response.data.results);
    }

    getCharacters();
  }, [page]);

  return (
    <Container>
      <Header />
      <Content>
        {characters.map(character => (
          <CharacterCard key={character.url} data={character} />
        ))}
      </Content>
    </Container>
  );
};

export default Characters;
