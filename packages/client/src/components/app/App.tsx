import { ApolloProvider } from '@apollo/client';
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Hello from '../../pages/hello/Hello';
import Home from '../../pages/home/Home';
import Pokemons from '../../pages/pokemons/Pokemons';
import client from './apollo-client';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/hello" component={Hello} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
