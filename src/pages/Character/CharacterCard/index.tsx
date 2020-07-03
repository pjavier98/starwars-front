import React, { useCallback } from 'react';

import { MdPerson } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';

import { ICharacter } from '../index';

import { Container } from './styles';

interface IProps {
  character: ICharacter;
  setOpenModal: (openModal: boolean) => void;
  setSelectedCharacter: (character: ICharacter) => void;
}

const CharacterCard: React.FC<IProps> = ({
  character,
  setOpenModal,
  setSelectedCharacter,
}: IProps) => {
  const handleClick = useCallback(() => {
    setSelectedCharacter(character);
    setOpenModal(true);
  }, [character, setSelectedCharacter, setOpenModal]);

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

      <button type="button" onClick={handleClick}>
        <FiMoreHorizontal size={25} />
      </button>
    </Container>
  );
};

export default CharacterCard;
