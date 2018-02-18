import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => {
    this.setState(
      { activeItem: name }
    )
  }


  render() {
    const { activeItem } = this.state

    return(
      <Menu stackable>
        <Menu.Item>
          LOGO
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
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
