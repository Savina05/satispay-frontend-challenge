import React from 'react';

import Button from '../button/Button';
import Logo from '../logo/Logo';
import Table from '../table/Table';

const Pokemons = () => {
  return (
    <>
      <Logo />
      <Table />
      <Button text="👋" endpoint="/hello" />
    </>
  );
};

export default Pokemons;
