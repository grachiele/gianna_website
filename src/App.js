import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import AboutContainer from './containers/AboutContainer'
import ReviewsContainer from './containers/ReviewsContainer'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
        <Route path="/about" component={AboutContainer}/>
        <Route path="/reviews" component={ReviewsContainer}/>
          <Route path="/" component={HomeContainer}/>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
