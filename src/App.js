import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/emailsender" exact component={} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
