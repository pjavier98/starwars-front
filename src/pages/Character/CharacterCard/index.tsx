import React from 'react';

import { Link } from 'react-router-dom';

import { MdPerson } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';

import { Container } from './styles';

interface Data {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

interface Props {
  data: Data;
}

const Cards: React.FC<Props> = ({ data }: Props) => {
  return (
    <Container>
      <div>
        <MdPerson size={20} />
        <p>Name: {data.name}</p>
      </div>

      <div>
        <FaBirthdayCake size={20} />
        <p>Birth Year: 19BBY</p>
      </div>

      <div>
        <GiBodyHeight size={20} />
        <p>Height: 172cm</p>
      </div>

      <div>
        <GiWeight size={20} />
        <p>Mass: 77kg</p>
      </div>

      {data.gender === 'male' ? (
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

      <div>
        <GiWeight size={20} />
        <p>Mass: 77kg</p>
      </div>
    </Container>
  );
};

export default Cards;
