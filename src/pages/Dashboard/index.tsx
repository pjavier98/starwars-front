import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, CategoryCard } from './styles';

import characterImg from '../../assets/character.png';
import startshipImg from '../../assets/startship.png';
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
          <Link to="/starships">
            <img src={startshipImg} alt="starships" />
            <p>Starships</p>
          </Link>
        </CategoryCard>

        <CategoryCard>
          <Link to="/planets">
            <img src={planetsImg} alt="" />
            <p>Planets</p>
          </Link>
        </CategoryCard>
      </Content>
    </Container>
  );
};

export default Dashboard;
