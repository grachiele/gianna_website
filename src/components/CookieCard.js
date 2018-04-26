import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {onClickBack, onClickForward} from '../helpers/backForward'

class ApricotCard extends React.Component {

    constructor(props){
      super(props);

      this.onClickBack = onClickBack.bind(this)
      this.onClickForward = onClickForward.bind(this)

      const img0 = require('./images/cookies/IMG_4029.jpg');
      const img1 = require('./images/cookies/IMG_4033.jpg');
      const img2 = require('./images/cookies/IMG_4034.jpg');


      this.state = {
        index: 0,
        imgList: [img0, img1, img2]
      }

    }

    render(){
      return (
        <Card>
          <div className="imgContainer">
              <Image src={this.state.imgList[this.state.index]} size='medium' verticalAlign="middle"/>
          </div>
          <Card.Content>
            <Card.Header>Cookies Cake</Card.Header>
            <Card.Meta>Cookies with hard sugar icing for engagment party</Card.Meta>
            <Card.Description>Sugar Cookies</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button basic color='teal' onClick={this.onClickBack} content='Back' icon='left arrow' labelPosition='left' />
            <Button basic color='teal' onClick={this.onClickForward} content='Next' icon='right arrow' labelPosition='right' />
          </Card.Content>
        </Card>
      )
    }
}

export default ApricotCard
