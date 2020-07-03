import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import StarshipCard from './StarshipCard';

import swapi from '../../services/swapi';

import { Container, Content } from './styles';

export interface IStarship {
  name: string;
  passengers: string;
  length: string;
}

const Starship: React.FC = () => {
  const [starships, setStarships] = useState<IStarship[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getStarship() {
      const response = await swapi.get(`/starships/?page=${page}`);
      setStarships(response.data.results);
    }

    getStarship();
  }, [page]);

  return (
    <Container>
      <Header />
      <Content>
        {starships.map(starship => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </Content>
      <Pagination page={page} setPage={setPage} totalPages={4} />
    </Container>
  );
};

export default Starship;
