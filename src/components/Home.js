import React from 'react'
import ApricotCakeCard from './ApricotCakeCard.js'
import CookieCard from './CookieCard.js'
import { Card, Grid } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    return (
      <Grid>
        <h2>Home</h2>
        <Card.Group itemsPerRow= {4}>
          <ApricotCakeCard />
          <CookieCard />
        </Card.Group>
      </Grid>
    )
  }
}

export default Home
