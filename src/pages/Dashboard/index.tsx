import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, CategoryCard } from './styles';

import characterImg from '../../assets/character.png';
import filmsImg from '../../assets/films.png';
import speciesImg from '../../assets/species.png';
import startshipImg from '../../assets/startship.png';
import vehiclesImg from '../../assets/vehicles.jpg';
import planetsImg from '../../assets/planets.jpg';

import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CategoryCard>
          <Link to="/characters">
            <img src={characterImg} alt="" />
            <p>Character</p>
          </Link>
        </CategoryCard>
        <CategoryCard>
          <Link to="/">
            <img src={filmsImg} alt="" />
            <p>Films</p>
          </Link>
        </CategoryCard>
        <CategoryCard>
          <Link to="/">
            <img src={speciesImg} alt="" />
            <p>Species</p>
          </Link>
        </CategoryCard>

        <CategoryCard>
          <Link to="/">
            <img src={startshipImg} alt="" />
            <p>Starships</p>
          </Link>
        </CategoryCard>
        <CategoryCard>
          <Link to="/">
            <img src={vehiclesImg} alt="" />
            <p>Vehicles</p>
          </Link>
        </CategoryCard>
        <CategoryCard>
          <Link to="/">
            <img src={planetsImg} alt="" />
            <p>Planets</p>
          </Link>
        </CategoryCard>
      </Content>
    </Container>
  );
};

export default Dashboard;
