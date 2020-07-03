import React, { useCallback } from 'react';

import { MdPeople } from 'react-icons/md';
import { FaPlane } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdResize } from 'react-icons/io';

import { IStarship } from '../index';

import { Container } from './styles';

interface IProps {
  starship: IStarship;
  setOpenModal: (openModal: boolean) => void;
  setSelectedStarship: (starship: IStarship) => void;
}

const Starship: React.FC<IProps> = ({
  starship,
  setOpenModal,
  setSelectedStarship,
}: IProps) => {
  const handleClick = useCallback(() => {
    setSelectedStarship(starship);
    setOpenModal(true);
  }, [setSelectedStarship, starship, setOpenModal]);

  return (
    <Container>
      <div>
        <FaPlane size={20} />
        <p>Starship: {starship.name}</p>
      </div>

      <div>
        <MdPeople size={20} />
        <p>Passengers: {starship.passengers}</p>
      </div>

      <div>
        <IoMdResize size={20} />
        <p>Length: {starship.length}</p>
      </div>

      <button type="button" onClick={handleClick}>
        <FiMoreHorizontal size={25} />
      </button>
    </Container>
  );
};

export default Starship;
