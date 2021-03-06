import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/bulb'
import BulbItem from './bulb_item'
import Masonry from 'react-masonry-component'
import _ from 'lodash'

class BulbList extends Component {

  deleteBulb(bulb) {
    this.props.deleteBulb(bulb)
  }
  likeBulb(bulb) {
    window.alert('Like feature coming soon.')
    // this.props.likeBulb(bulb.id)
  }

  render() {
    let { mode, myBulbs, allBulbs } = this.props
    let bulbs = []

    if (mode === 'all')
      bulbs = allBulbs

    if (mode === 'user')
      bulbs = myBulbs

    let masonryOptions = {
      transitionDuration: 500,
    }

    return (

      <Masonry
        class={'my-gallery-class'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {
          bulbs.map((bulb, i) => {
            if (_.some(myBulbs, myBulb => {
              return myBulb.id === bulb.id
            })
            )
              mode = 'user'
            else
              mode = 'all'
            return (
              <BulbItem
                bulb={bulb}
                key={bulb.id + i}
                mode={mode}
                deleteBulb={b => this.deleteBulb(b)}
                likeBulb={b => this.likeBulb(b)}
              />
            )
          })
        }
      </Masonry>
    )
  }
}


function mapStateToProps(state) {
  return {
    allBulbs: state.bulb.allBulbs,
    myBulbs: state.bulb.myBulbs,
  }
}

export default connect(mapStateToProps, actions)(BulbList)
