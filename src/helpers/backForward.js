export function onClickForward(){
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

export function onClickBack(){
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
