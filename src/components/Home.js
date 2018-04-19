import React from 'react'
import ApricotCakeCard from './ApricotCakeCard.js'
import CookieCard from './CookieCard.js'
import { Card, Grid } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    return (
      <Grid>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <Card.Group>
            <ApricotCakeCard />
            <CookieCard />
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home
