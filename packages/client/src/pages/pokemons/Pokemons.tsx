import React, { FC } from 'react';

import Button from '../../components/button/Button';
import Logo from '../../components/logo/Logo';
import Table from '../../components/table/Table';

import './Pokemons.scss';

const Pokemons: FC = () => {
  return (
    <div className="container_pokemons">
      <Logo />
      <Table />
      <Button text="👋" endpoint="/hello" />
    </div>
  );
};

export default Pokemons;
