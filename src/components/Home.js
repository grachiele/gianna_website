import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Home extends React.Component {

  constructor(){
    super()

    this.onClickForward = this.onClickForward.bind(this)
    this.onClickBack = this.onClickBack.bind(this)

    const img0 = require('./images/IMG_6197.jpg');
    const img1 = require('./images/IMG_6198.jpg');
    const img2 = require('./images/IMG_6199.jpg');
    const img3 = require('./images/IMG_6200.jpg');
    const img4 = require('./images/IMG_6201.jpg');
    const img5 = require('./images/IMG_6202.jpg');
    const img6 = require('./images/IMG_6202.jpg');

    this.state = {
      index: 0,
      imgList: [img0, img1, img2, img3, img4, img5, img6]
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
    console.log(this.state)
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

    console.log(this.state.index)
    return (
      <div>
        <h2>Home</h2>
        <Card>
          <Image src={this.state.imgList[this.state.index]} />
          <Card.Content>
            <Card.Header>Naked Apricot Cake</Card.Header>
            <Card.Meta>Apricot with a frosting of sorts</Card.Meta>
            <Card.Description>Naked layered cake</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a onClick={this.onClickBack}>
              Last Picture
              <Icon name='left chevron' />
            </a>
            <a onClick={this.onClickForward}>
              <Icon name='right chevron' />
              Next Picture
            </a>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Home
