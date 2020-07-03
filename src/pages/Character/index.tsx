import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import CharacterCard from './CharacterCard';

import swapi from '../../services/swapi';

import { Container, Content } from './styles';

export interface ICharacter {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
  url: string;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getCharacters() {
      const response = await swapi.get(`/people/?page=${page}`);
      setCharacters(response.data.results);
    }

    getCharacters();
  }, [page]);

  return (
    <Container>
      <Header />
      <Content>
        {characters.map(character => (
          <CharacterCard key={character.url} character={character} />
        ))}
      </Content>
      <Pagination page={page} setPage={setPage} totalPages={9} />
    </Container>
  );
};

export default Characters;
