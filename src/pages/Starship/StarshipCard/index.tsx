import React from 'react';

import { Link } from 'react-router-dom';

import { MdPeople } from 'react-icons/md';
import { FaPlane } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdResize } from 'react-icons/io';

import { IStarship } from '../index';

import { Container } from './styles';

interface IProps {
  starship: IStarship;
}

const Starship: React.FC<IProps> = ({ starship }: IProps) => {
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

      {/* <div>
        <GiBodyHeight size={20} />
        <p>Height: {starship.height}</p>
      </div>

      <div>
        <GiWeight size={20} />
        <p>Mass: 77kg</p>
      </div> */}

      {/* {starship.gender === 'male' ? (
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
        <IoMdResize size={20} />
        <p>Length: {starship.length}</p>
      </div>

      <button type="button" onClick={() => alert('q')}>
        <FiMoreHorizontal size={25} />
      </button>
    </Container>
  );
};

export default Starship;
