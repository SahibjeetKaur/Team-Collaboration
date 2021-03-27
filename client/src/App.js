import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layouts/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import icon from './img/comCrew.png';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
         <Fragment>
           <Navbar icon={icon} />
           <div className="container">
            <Alerts/>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Login' component={Login} />
        </Switch>
      </div>
    </Fragment>
    </Router>
    </AlertState>
    </AuthState>
  );
}

export default App;
