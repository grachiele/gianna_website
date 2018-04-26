import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {onClickBack, onClickForward} from '../helpers/backForward'

class CupcakeCard extends React.Component {

    constructor(props){
      super(props);

      this.onClickBack = onClickBack.bind(this)
      this.onClickForward = onClickForward.bind(this)

      const img0 = require('./images/cupcakes/IMG_5413.png');
      const img1 = require('./images/cupcakes/IMG_5414.png');


      this.state = {
        index: 0,
        imgList: [img0, img1]
      }

    }

    render(){
      return (
        <Card>
          <Image src={this.state.imgList[this.state.index]} size='medium' verticalAlign="middle" className="imgContainer"/>
          <Card.Content>
            <Card.Header>Pumpkin Cupcakes</Card.Header>
            <Card.Meta>Pumpkin Cupcakes with buttercream icing</Card.Meta>
            <Card.Description>Fall Desserts</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button basic color='teal' onClick={this.onClickBack} content='Back' icon='left arrow' labelPosition='left' />
            <Button basic color='teal' onClick={this.onClickForward} content='Next' icon='right arrow' labelPosition='right' />
          </Card.Content>
        </Card>
      )
    }
}

export default CupcakeCard
