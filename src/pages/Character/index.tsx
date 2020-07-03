import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { RiCloseCircleLine } from 'react-icons/ri';

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
  Description,
  HomeWorld,
  CharacterRelatedThings,
  RelatedCard,
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
              <h4>{selectedCharacter.name}</h4>
              <Description>
                <div>
                  <p>Birth Year: {selectedCharacter.birth_year}</p>
                  <p>Height: {selectedCharacter.height}</p>
                  <p>Mass: {selectedCharacter.mass}kg</p>
                </div>
                <div>
                  <p>Gender: {selectedCharacter.gender}</p>
                  <p>Hair Color: {selectedCharacter.hair_color}</p>
                  <p>Skin Color: {selectedCharacter.skin_color}</p>
                </div>
              </Description>
              <HomeWorld>
                <a href={selectedCharacter.homeworld}>
                  Homeworld: {selectedCharacter.homeworld}
                </a>
              </HomeWorld>
            </CharacterDescription>

            <CharacterRelatedThings>
              <RelatedCard>
                <h4>Related Films</h4>
                <p>Episode IV: A New Hope</p>
                <p>Episode V: A New Hope</p>
                <p>Episode VI: A New Hope</p>
                <p>Episode VII: A New Hope</p>
              </RelatedCard>

              <RelatedCard>
                <h4>Related Vehicles</h4>
                <p>Episode IV: A New Hope</p>
                <p>Episode V: A New Hope</p>
                <p>Episode VI: A New Hope</p>
                <p>Episode VII: A New Hope</p>
              </RelatedCard>

              <RelatedCard>
                <h4>Related Starships</h4>
                <p>Episode IV: A New Hope</p>
                <p>Episode V: A New Hope</p>
                <p>Episode VI: A New Hope</p>
                <p>Episode VII: A New Hope</p>
              </RelatedCard>
            </CharacterRelatedThings>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Characters;
