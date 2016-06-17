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
          <li>Save all of your brite ideas as bulbs: a title and image</li>
          <li>See and like others' bulbs</li>
          <li>...</li>
        </ul>
      </div>
    )
  }
}
