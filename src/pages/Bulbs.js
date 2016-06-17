import React, { Component } from 'react'
import BulbList from '../components/bulb_list'


class Bulbs extends Component {

  render() {
    return (
      <div>
        <h1>Bulbs</h1>
        <BulbList mode="all" />
      </div>
    )
  }
}

export default Bulbs
