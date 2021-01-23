import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Hello from '../hello/Hello';
import Home from '../home/Home';
import Pokemons from '../pokemons/Pokemons';

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/hello" component={Hello} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
