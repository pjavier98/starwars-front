import React, { useState, useEffect } from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';
import { FaBirthdayCake } from 'react-icons/fa';
import { IoMdResize } from 'react-icons/io';
import { GiWeight } from 'react-icons/gi';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { MdInvertColors } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import CharacterCard from './CharacterCard';

import swapi from '../../services/swapi';

import {
  Container,
  Content,
  Modal,
  ModalContent,
  ModalHeader,
  CharacterDescription,
} from './styles';

export interface ICharacter {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  homeworld: string;
  url: string;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState({} as ICharacter);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getCharacters() {
      const response = await swapi.get(`/people/?page=${page}`);
      setCharacters(response.data.results);
    }

    getCharacters();
  }, [page]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          {characters.map(character => (
            <CharacterCard
              key={character.url}
              character={character}
              setOpenModal={setOpenModal}
              setSelectedCharacter={setSelectedCharacter}
            />
          ))}
        </Content>
        <Pagination page={page} setPage={setPage} totalPages={9} />
      </Container>
      {openModal && (
        <Modal>
          <ModalHeader>
            <button type="button" onClick={() => setOpenModal(false)}>
              <RiCloseCircleLine size={35} />
            </button>
          </ModalHeader>
          <ModalContent>
            <CharacterDescription>
              <div>
                <h4>{selectedCharacter.name}</h4>
                <div>
                  <FaBirthdayCake size={20} />
                  <p>Birth Year: {selectedCharacter.birth_year}</p>
                </div>
                <div>
                  <IoMdResize size={20} />
                  <p>Height: {selectedCharacter.height}</p>
                </div>
                <div>
                  <GiWeight size={20} />
                  <p>Mass: {selectedCharacter.mass}kg</p>
                </div>
                <div>
                  {selectedCharacter.gender === 'male' ? (
                    <AiOutlineMan size={20} />
                  ) : (
                    <AiOutlineWoman size={20} />
                  )}
                  <p>Gender: {selectedCharacter.gender}</p>
                </div>
                <div>
                  <MdInvertColors size={20} />
                  <p>Hair Color: {selectedCharacter.hair_color}</p>
                </div>
                <div>
                  <BsFillPersonFill size={20} />
                  <p>Skin Color: {selectedCharacter.skin_color}</p>
                </div>
              </div>
            </CharacterDescription>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Characters;
