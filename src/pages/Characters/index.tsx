import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container, Content } from './styles';

const Characters: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
};

export default Characters;
