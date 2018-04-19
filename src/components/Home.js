import React from 'react'
import ApricotCakeCard from './ApricotCakeCard.js'
import CookieCard from './CookieCard.js'
import { Card, Grid } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    return (
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={14}>
          <Card.Group centered>
            <ApricotCakeCard />
            <CookieCard />
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home
