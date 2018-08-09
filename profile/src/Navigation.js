import React, { Component } from 'react'
import AboutMe from './AboutMe'

class Navigation extends Component {

  // state = {
  //   toggle: true
  // }

  handleClick = (event) => {
    event.preventDefault()

  }

  render() {
    return (
      <div className='nav'>
        <a href='#' onClick={this.handleClick}>About Me</a>
        <a href='#' onClick={this.handleClick}>Projects</a>
        <a href='#' onClick={this.handleClick}>Contact</a>
        {/* <AboutMe /> */}
      </div>
    )
  }
}

export default Navigation;