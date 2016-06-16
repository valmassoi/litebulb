import React, { Component } from 'react'
import { connect } from 'react-redux'
import BulbItem from './bulb_item'

class BulbList extends Component {


  render() {


    let bulbs = [{ title:"one", descr:"some descr", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }, { title:"two", descr:"some descr", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }] // HACK

    return (
      <ul class="list-group" style={{marginTop: '5px'}}>
        {
          bulbs.map((bulb, i) => {
            return (
              <BulbItem bulb={bulb} key={bulb.title+i} />
            )
          })
        }
      </ul>
    )
  }
}




function mapStateToProps(state) {
  return {
    null
  }
}

export default connect(mapStateToProps, null)(BulbList)
