import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => {
    this.setState(
      { activeItem: name,
      color: 'pink' }
    )
  }


  render() {
    const { color } = this.state
    const { activeItem } = this.state

    return(
      <Menu stackable>
        <Menu.Item>
          LOGO
        </Menu.Item>

        <Menu.Item
          color={color}
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          color={color}
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          color={color}
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;
