import React, { Component } from 'react'

import Footer from '../components/Footer'
import Nav from '../components/Nav'

class Layout extends Component {

  render() {
    const { location } = this.props
    return (
      <div>
        <Nav location={location} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
