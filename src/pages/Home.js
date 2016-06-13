import React, { Component } from "react"
import { Link } from 'react-router'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {

    return(
      <div>
        <Link to="/dashboard">
          <button class="btn btn-primary pull-right">Dashboard</button>
        </Link>
        <h1>Welcome to Litebulb</h1>
        <ul>
          <li>Add all of your brite ideas as bulbs</li>
          <li>See others' bulbs</li>
          <li>...</li>
        </ul>
      </div>
    )
  }
}
