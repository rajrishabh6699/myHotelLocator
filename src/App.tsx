import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main/';
import { Switch, Route } from 'react-router-dom';
import DetailsAndMap from './components/DetailsAndMap';
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotels } from './redux';

const App = () => {

  const dispatch = useDispatch()
  const { currentPage } = useSelector((state: any) => state.hotels)

  useEffect(() => {
    dispatch(fetchHotels(currentPage))
  }, [])

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
