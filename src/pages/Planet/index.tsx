import React, { useState, useEffect } from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';
import { GiBackwardTime, GiSpaceSuit } from 'react-icons/gi';
import { FaSun } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FiCircle } from 'react-icons/fi';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PlanetCard from './PlanetCard';

import swapi from '../../services/swapi';

import {
  Container,
  Content,
  Modal,
  ModalContent,
  ModalHeader,
  PlanetDescription,
} from './styles';

export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  climate: string;
  terrain: string;
  diameter: string;
  population: string;
}

const Planet: React.FC = () => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState({} as IPlanet);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getPlanets() {
      const response = await swapi.get(`/planets/?page=${page}`);
      setPlanets(response.data.results);
    }

    getPlanets();
  }, [page]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          {planets.map(planet => (
            <PlanetCard
              key={planet.name}
              planet={planet}
              setOpenModal={setOpenModal}
              setSelectedPlanet={setSelectedPlanet}
            />
          ))}
        </Content>
        <Pagination page={page} setPage={setPage} totalPages={6} />
      </Container>
      {openModal && (
        <Modal>
          <ModalHeader>
            <button type="button" onClick={() => setOpenModal(false)}>
              <RiCloseCircleLine size={35} />
            </button>
          </ModalHeader>
          <ModalContent>
            <PlanetDescription>
              <div>
                <h4>{selectedPlanet.name}</h4>
                <div>
                  <GiBackwardTime size={20} />
                  <p>Model: {selectedPlanet.rotation_period}</p>
                </div>
                <div>
                  <FaSun size={20} />
                  <p>Manufacturer: {selectedPlanet.orbital_period}</p>
                </div>
                <div>
                  <GiSpaceSuit size={20} />
                  <p>Passengers: {selectedPlanet.gravity}</p>
                </div>
                <div>
                  <FiCircle size={20} />
                  <p>Cost in credits: {selectedPlanet.diameter}</p>
                </div>
                <div>
                  <TiWeatherPartlySunny size={20} />
                  <p>Length: {selectedPlanet.climate}</p>
                </div>
                <div>
                  <BsFillPersonFill size={20} />
                  <p>Starship class: {selectedPlanet.population}</p>
                </div>
              </div>
            </PlanetDescription>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Planet;
