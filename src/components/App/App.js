import React from 'react';
import { AppStyled } from './styled';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <AppStyled>
      <Switch>
        <Route path="/dashboard" exact component={() => <Navbar />} />
        <Route path="/login" exact component={() => <Login />} />
      </Switch>
    </AppStyled>
  );
}

export default App;
