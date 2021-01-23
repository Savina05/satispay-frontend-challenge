import React from 'react';

import Logo from '../../components/logo/Logo';

const Hello: React.FC = () => {
  return (
    <>
      <Logo />
      <h1 className="header">Hello Satispay Team! 👋</h1>
      <p className="text">
        I really enjoyed building this small application and I just wanted to
        thank you for giving me this opportunity.
        <br />I also want to point out that it was my first time working with
        Ant Design, Apollo Client and GraphQL (how powerful is it?! 🤯 I will
        definitely be using it more!).
        <br />
        Any feedback would be highly appreciated as it would help me grow as a
        professional.
        <br />
        Thank you again, I hope to hear back from you soon.🤞
        <br />
        Have a nice day!
        <br />
        Savina 👩🏻‍💻
      </p>
    </>
  );
};

export default Hello;
