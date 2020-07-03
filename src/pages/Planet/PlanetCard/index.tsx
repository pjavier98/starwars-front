import React, { useCallback } from 'react';

import { MdPeople } from 'react-icons/md';
import { FiMoreHorizontal, FiCircle } from 'react-icons/fi';
import { GiPlanetCore } from 'react-icons/gi';

import { IPlanet } from '../index';

import { Container } from './styles';

interface IProps {
  planet: IPlanet;
  setOpenModal: (openModal: boolean) => void;
  setSelectedPlanet: (planet: IPlanet) => void;
}

const PlanetCard: React.FC<IProps> = ({
  planet,
  setOpenModal,
  setSelectedPlanet,
}: IProps) => {
  const handleClick = useCallback(() => {
    setSelectedPlanet(planet);
    setOpenModal(true);
  }, [planet, setOpenModal, setSelectedPlanet]);

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

      <div>
        <FiCircle size={20} />
        <p>Diameter: {planet.diameter}</p>
      </div>

      <button type="button" onClick={handleClick}>
        <FiMoreHorizontal size={25} />
      </button>
    </Container>
  );
};

export default PlanetCard;
