import React from 'react';

import { Link } from 'react-router-dom';

import { MdPerson } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { GiBodyHeight, GiWeight, GiWorld } from 'react-icons/gi';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';

import { ICharacter } from '../index';

import { Container } from './styles';

interface IProps {
  character: ICharacter;
}

const CharacterCard: React.FC<IProps> = ({ character }: IProps) => {
  return (
    <Container>
      <div>
        <MdPerson size={20} />
        <p>Name: {character.name}</p>
      </div>

      <div>
        <FaBirthdayCake size={20} />
        <p>Birth Year: {character.birth_year}</p>
      </div>

      {/* <div>
        <GiBodyHeight size={20} />
        <p>Height: {character.height}</p>
      </div>

      <div>
        <GiWeight size={20} />
        <p>Mass: 77kg</p>
      </div> */}

      {character.gender === 'male' ? (
        <div>
          <AiOutlineMan size={20} />
          <p>Gender: Male</p>
        </div>
      ) : (
        <div>
          <AiOutlineWoman size={20} />
          <p>Gender: Female</p>
        </div>
      )}

      {/* <div>
        <GiWorld size={20} />
        <p>Homeworld: {character.homeworld}</p>
      </div> */}

      <button type="button" onClick={() => alert('q')}>
        <FiMoreHorizontal size={25} />
      </button>
    </Container>
  );
};

export default CharacterCard;
