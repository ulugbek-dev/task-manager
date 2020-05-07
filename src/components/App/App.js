import React, { useEffect } from 'react';
import { AppStyled } from './styled';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useAuthChecker } from '../../hooks/useAuthChecker';

function App() {
  const auth = useAuthChecker();
  const history = useHistory();

  useEffect(() => {
    if(auth)
      history.push('/dashboard');
    else
      history.push('/login');
  }, [auth]);

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
