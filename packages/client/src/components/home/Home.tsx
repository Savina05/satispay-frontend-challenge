import React from 'react';
import Logo from '../logo/Logo';
import PokemonLogo from '../logo/PokemonLogo';
import Button from '../button/Button';

import './Home.scss';

const Home = () => {
  return (
    <>
      <header className="home">
        <div>
          <Logo />
          <PokemonLogo />
          <p className="text">
            Welcome to the Pokédex!
            <br />
            Click on the button below and learn everything about Pokémons.
            <br />
            Hint: click on the Pokéball! 😎
          </p>
          <Button text="Start now" endpoint="/pokemons" />
        </div>
      </header>
    </>
  );
};

export default Home;
