import React from 'react'
import ApricotCakeCard from './ApricotCakeCard.js'
import CookieCard from './CookieCard.js'
import { Card, Grid } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    return (
      <Grid>
        <Card.Group>
          <ApricotCakeCard />
          <CookieCard />
        </Card.Group>
      </Grid>
    )
  }
}

export default Home
