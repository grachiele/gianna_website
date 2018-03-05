import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

  state = {
    
  }

  handleItemClick = (e, { name }) => {
    this.setState(
      { activeItem: name,
      color: 'teal' }
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

        <NavLink to='/'><Menu.Item
          color={color}
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item></NavLink>

      <NavLink to='/about'><Menu.Item
          color={color}
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item></NavLink>

        <NavLink to='/reviews'><Menu.Item
          color={color}
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item></NavLink>
      </Menu>
    )
  }
}

export default NavBar;
