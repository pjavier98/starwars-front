import React from 'react';

import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';
import { HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  const user = {
    name: 'Pedro Javier',
  };

  return (
    <HeaderContent>
      <Link to="/dashboard">
        <img src={logoImg} alt="GoBarber" />
      </Link>

      <Profile>
        <img
          src={`https://api.adorable.io/avatars/${user.name}`}
          alt={user.name}
        />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>

        <button type="button" onClick={() => {}}>
          <FiPower />
        </button>
      </Profile>
    </HeaderContent>
  );
};

export default Header;
