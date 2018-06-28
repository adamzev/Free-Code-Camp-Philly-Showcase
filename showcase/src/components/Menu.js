import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link }from 'react-router-dom';

export default class MainMenu extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to='/'
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          as={Link}
          to='/about'
        >
          About
        </Menu.Item>
      </Menu>
    )
  }
}
