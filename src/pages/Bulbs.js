import React, { Component } from 'react'
import { Link } from 'react-router'
import BulbList from '../components/bulb_list'

class Bulbs extends Component {

  render() {
    return (
      <div>
        <Link to="/dashboard">
          <button class="btn btn-primary pull-right">Dashboard</button>
        </Link>
        <h1>Bulbs</h1>
        <BulbList mode="all" />
      </div>
    )
  }
}

export default Bulbs
