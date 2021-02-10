import React, { FC, useState } from 'react';
import { Modal } from 'antd';

import pokeballOpen from './pokeball-open.png';
import pokeballClosed from './pokeball-closed.png';

import './Pokeball.scss';

interface IPokeball {
  id: number;
}

const Pokeball: FC<IPokeball> = ({ id }: IPokeball) => {
  const [open, setOpen] = useState<boolean>(false);

  const closePokeball = () => {
    setOpen(false);
  };

  const choosePokemon = () => {
    setOpen(true);
    Modal.info({
      title: '',
      content: (
        <img
          className="pkm_img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="pokemon"
        />
      ),
      afterClose() {
        closePokeball();
      },
      centered: true,
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
