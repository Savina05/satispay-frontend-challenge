import React, { FC } from 'react';

import './Button.scss';

import { IButtonType } from '../../shared/interfaces';

const Button: FC<IButtonType> = ({ text, endpoint }) => {
  return (
    <a href={endpoint} className="btn">
      {text}
    </a>
  );
};

export default Button;
