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
            <img src={characterImg} alt="characters" />
            <p>Character</p>
          </Link>
        </CategoryCard>

        <CategoryCard>
          <Link to="/starship">
            <img src={startshipImg} alt="starships" />
            <p>Starships</p>
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
