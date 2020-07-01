import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Checkout from './components/Checkout'
import Success from './components/Success'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Checkout} exact/>
          <Route path="/success" component={Success} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;