import React from 'react'
import { Grid } from 'semantic-ui-react'
class About extends React.Component {

  render(){
    return (
      <div>
        <Grid>
          <Grid.Column width={4} />
          <Grid.Column width={8} textAlign='center'>
            <Grid.Row>
              <h1>About</h1>
            </Grid.Row>
            <Grid.Row>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid>
      </div>
    )
  }
}

export default About
