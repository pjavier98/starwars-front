import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PlanetCard from './PlanetCard';

import swapi from '../../services/swapi';

import { Container, Content } from './styles';

export interface IPlanet {
  name: string;
  diameter: string;
  population: string;
}

const Planet: React.FC = () => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getPlanets() {
      const response = await swapi.get(`/planets/?page=${page}`);
      setPlanets(response.data.results);
    }

    getPlanets();
  }, [page]);

  return (
    <Container>
      <Header />
      <Content>
        {planets.map(planet => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </Content>
      <Pagination page={page} setPage={setPage} totalPages={6} />
    </Container>
  );
};

export default Planet;
