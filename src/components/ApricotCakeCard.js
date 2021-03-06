import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {onClickBack, onClickForward} from '../helpers/backForward'


class ApricotCard extends React.Component {

    constructor(props){
      super(props);

      this.onClickBack = onClickBack.bind(this)
      this.onClickForward = onClickForward.bind(this)

      const img0 = require('./images/apricot/IMG_6197.jpg');
      const img1 = require('./images/apricot/IMG_6198.jpg');
      const img2 = require('./images/apricot/IMG_6199.jpg');
      const img3 = require('./images/apricot/IMG_6200.jpg');
      const img4 = require('./images/apricot/IMG_6201.jpg');
      const img5 = require('./images/apricot/IMG_6202.jpg');
      const img6 = require('./images/apricot/IMG_6203.jpg');

      this.state = {
        index: 0,
        imgList: [img0, img1, img2, img3, img4, img5, img6]
      }

    }

    render(){
      return (
        <Card>
          <div className="imgContainer">
              <Image src={this.state.imgList[this.state.index]} size='medium' verticalAlign="middle"/>
          </div>
          <Card.Content>
            <Card.Header>Naked Apricot Cake</Card.Header>
            <Card.Meta>Apricot with a frosting of sorts</Card.Meta>
            <Card.Description>Naked layered cake</Card.Description>
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
