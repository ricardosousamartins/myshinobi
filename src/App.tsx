import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Home } from './components/Home'
import { FourZeroFour } from './components/FourZeroFour'

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <FourZeroFour />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
