import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main/';
import { Switch, Route } from 'react-router-dom';
import DetailsAndMap from './components/DetailsAndMap';

const App = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/hotel" component={DetailsAndMap} />
      </Switch>
    </>
  );
}

export default App;
