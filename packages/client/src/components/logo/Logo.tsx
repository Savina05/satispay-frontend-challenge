import React from 'react';

import logo from './satispay.svg.png';

import './Logo.scss';

const Logo: React.FC = () => {
  return (
    <a href="/">
      <img src={logo} alt="logo" className="logo" />
    </a>
  );
};

export default Logo;
