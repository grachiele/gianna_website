import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={HomeContainer}/>
          <Route exact path="/home" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
