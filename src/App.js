import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomeContainer}/>
        <Route exact path="/home" component={HomeContainer} />
      </Switch>
    );
  }
}

export default App;
