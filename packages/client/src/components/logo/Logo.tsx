import React from 'react';
import './Logo.scss';
import logo from './satispay.svg.png';

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="logo" className="logo" />
    </a>
  );
};

export default Logo;
