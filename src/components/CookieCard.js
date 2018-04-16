import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


class ApricotCard extends React.Component {

    constructor(props){
      super(props);

      this.onClickBack = this.onClickBack.bind(this)
      this.onClickForward = this.onClickForward.bind(this)

      const img0 = require('./images/cookies/IMG_4029.jpg');
      const img1 = require('./images/cookies/IMG_4033.jpg');
      const img2 = require('./images/cookies/IMG_4034.jpg');


      this.state = {
        index: 0,
        imgList: [img0, img1, img2]
      }

    }

    onClickForward() {
      if (this.state.index + 1 === this.state.imgList.length) {
        this.setState({
          index: 0
        })
      } else {
        this.setState({
          index: this.state.index + 1
        })
      }
    }

    onClickBack() {
      if (this.state.index - 1 === -1) {
        this.setState({
          index: this.state.imgList.length - 1
        })
      } else {
        this.setState({
          index: this.state.index - 1
        })
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
