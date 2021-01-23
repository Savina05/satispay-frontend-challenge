import React, { useState } from 'react';
import { Modal } from 'antd';

import Card from '../card/Card';

import './Pokeball.scss';
import pokeballOpen from './pokeball-open.png';
import pokeballClosed from './pokeball-closed.png';

const Pokeball = () => {
  const [open, setOpen] = useState(false);

  const closePokeball = () => {
    setOpen(false);
  };

  const choosePokemon = () => {
    setOpen(true);
    info();
  };

  const info = () => {
    Modal.info({
      title: 'Pikachu',
      content: <Card />,
      afterClose() {
        closePokeball();
      },
      centered: true,
      okText: 'CLOSE',
    });
  };

  return (
    <img
      className="pokeball"
      onClick={choosePokemon}
      src={open ? pokeballOpen : pokeballClosed}
      alt="Pokeball open"
      id="pokeball"
    />
  );
};

export default Pokeball;
