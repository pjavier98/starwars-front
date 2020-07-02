import React from 'react';

import { Link } from 'react-router-dom';

import character from '../../assets/example.jpg';

import { Container } from './styles';

const Cards: React.FC = () => {
  return (
    <Container>
      <Link to="/characters/1">
        <img src={character} alt="" />
        <div>
          <p>Luke Skywalker</p>
        </div>
      </Link>
    </Container>
  );
};

export default Cards;
