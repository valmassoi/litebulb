import React, { Component } from 'react'
import BulbList from '../components/bulb_list'
import NewBulb from '../components/new_bulb' //HACK

class Bulbs extends Component {

  render() {
    return (
      <div>
        Bulbs
        <BulbList />
        {/*<NewBulb />*/}
      </div>

    )
  }

}

export default Bulbs
