import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" name="Register" component={Register} />
            <Route exact path="/login" name="Login" component={Login} />
            <Route path="/" name="Home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
