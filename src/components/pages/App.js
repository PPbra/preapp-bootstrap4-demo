import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import authenService from "../../services/AuthenService";
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" name="Register" component={requireUnAuthen(Register)} />
            <Route exact path="/login" name="Login" component={requireUnAuthen(Login)} />
            <Route path="/" name="Home" component={requireAuthen(Home)} />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

const requireAuthen = (component) => (props) => {
  const userInfo = authenService.getUserInfo();
  return userInfo ? React.createElement(component, props) : <Redirect to='/login' />;
};

const requireUnAuthen = (component) => (props) => {
  const userInfo = authenService.getUserInfo();
  return !userInfo ? React.createElement(component, props) : <Redirect to='/' />;
};


export default App;
