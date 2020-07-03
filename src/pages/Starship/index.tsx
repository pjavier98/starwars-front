import React, { useState, useEffect } from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';
import { MdAirplanemodeActive, MdAttachMoney } from 'react-icons/md';
import { FaIndustry } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdResize, IoIosAirplane } from 'react-icons/io';

import swapi from '../../services/swapi';
import StarshipCard from './StarshipCard';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Modal,
  ModalContent,
  ModalHeader,
  CharacterDescription,
} from './styles';

export interface IStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  passengers: string;
  length: string;
  starship_class: string;
}

const Starship: React.FC = () => {
  const [starships, setStarships] = useState<IStarship[]>([]);
  const [selectedStarship, setSelectedStarship] = useState({} as IStarship);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getStarship() {
      const response = await swapi.get(`/starships/?page=${page}`);
      setStarships(response.data.results);
    }

    getStarship();
  }, [page]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          {starships.map(starship => (
            <StarshipCard
              key={starship.name}
              starship={starship}
              setOpenModal={setOpenModal}
              setSelectedStarship={setSelectedStarship}
            />
          ))}
        </Content>
        <Pagination page={page} setPage={setPage} totalPages={4} />
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
                <h4>{selectedStarship.name}</h4>
                <div>
                  <MdAirplanemodeActive size={20} />
                  <p>Model: {selectedStarship.model}</p>
                </div>
                <div>
                  <FaIndustry size={20} />
                  <p>Manufacturer: {selectedStarship.manufacturer}</p>
                </div>
                <div>
                  <BsFillPersonFill size={20} />
                  <p>Passengers: {selectedStarship.passengers}</p>
                </div>
                <div>
                  <MdAttachMoney size={20} />
                  <p>Cost in credits: {selectedStarship.cost_in_credits}</p>
                </div>
                <div>
                  <IoMdResize size={20} />
                  <p>Length: {selectedStarship.length}</p>
                </div>
                <div>
                  <IoIosAirplane size={20} />
                  <p>Starship class: {selectedStarship.starship_class}</p>
                </div>
              </div>
            </CharacterDescription>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Starship;
