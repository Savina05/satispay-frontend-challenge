import React from 'react';

import logo from './plogo.png';

import './Logo.scss';

const PokemonLogo: React.FC = () => {
  return (
    <h1 className="header">
      The{' '}
      <span>
        <img src={logo} alt="Pokemon Logo" className="pokemon_logo" />
      </span>{' '}
      Library
    </h1>
  );
};

export default PokemonLogo;
