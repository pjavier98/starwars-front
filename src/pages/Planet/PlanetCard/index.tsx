import React from 'react';

import { Link } from 'react-router-dom';

import { MdPeople } from 'react-icons/md';
import { FiMoreHorizontal, FiCircle } from 'react-icons/fi';
import { GiPlanetCore } from 'react-icons/gi';

import { IPlanet } from '../index';

import { Container } from './styles';

interface IProps {
  planet: IPlanet;
}

const PlanetCard: React.FC<IProps> = ({ planet }: IProps) => {
  return (
    <Container>
      <div>
        <GiPlanetCore size={20} />
        <p>Name: {planet.name}</p>
      </div>

      <div>
        <MdPeople size={20} />
        <p>Population: {planet.population}</p>
      </div>

      {/* <div>
        <GiBodyHeight size={20} />
        <p>Height: {planet.height}</p>
      </div>

      <div>
        <GiWeight size={20} />
        <p>Mass: 77kg</p>
      </div> */}

      {/* {planet.gender === 'male' ? (
        <div>
          <AiOutlineMan size={20} />
          <p>Gender: Male</p>
        </div>
      ) : (
        <div>
          <AiOutlineWoman size={20} />
          <p>Gender: Female</p>
        </div>
      )} */}

      <div>
        <FiCircle size={20} />
        <p>Diameter: {planet.diameter}</p>
      </div>

      <button type="button" onClick={() => alert('q')}>
        <FiMoreHorizontal size={25} />
      </button>
    </Container>
  );
};

export default PlanetCard;
