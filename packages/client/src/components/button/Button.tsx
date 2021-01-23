import React from 'react';

import './Button.scss';

type TextType = {
  text: String;
  endpoint: string;
};

const Button = ({ text, endpoint }: TextType) => {
  return (
    <a href={endpoint} className="btn">
      {text}
    </a>
  );
};

export default Button;
