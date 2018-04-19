import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


class CupcakeCard extends React.Component {

    constructor(props){
      super(props);

      this.onClickBack = this.onClickBack.bind(this)
      this.onClickForward = this.onClickForward.bind(this)

      const img0 = require('./images/cupcakes/IMG_5413.png');
      const img1 = require('./images/cupcakes/IMG_5414.png');


      this.state = {
        index: 0,
        imgList: [img0, img1]
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
          <Image src={this.state.imgList[this.state.index]} size='medium' verticalAlign="middle" className="imgContainer"/>
          <Card.Content>
            <Card.Header>Pumpkin Cupcakes</Card.Header>
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

export default CupcakeCard