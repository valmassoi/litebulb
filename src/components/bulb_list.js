import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/bulb'
import BulbItem from './bulb_item'
import Masonry from 'react-masonry-component'

class BulbList extends Component {

  deleteBulb(bulb) {
    this.props.deleteBulb(bulb)//TODO ._id
  }
  likeBulb(bulb) {
    this.props.likeBulb(bulb)//TODO ._id
  }

  render() {
    let { mode, myBulbs, allBulbs } = this.props
    let bulbs = []

    if (mode=="all")
      bulbs=this.props.allBulbs

    if (mode=="user")
      bulbs=this.props.myBulbs
      
    let masonryOptions = {
        transitionDuration: 500
    }

    return (

      <Masonry
          className={'my-gallery-class'}
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
      >
        {
          bulbs.map((bulb, i) => {
            return (
              <BulbItem
                bulb={bulb}
                key={bulb.title+i}
                mode={mode}
                deleteBulb={bulb => this.deleteBulb(bulb)}
                likeBulb={bulb => this.likeBulb(bulb)}
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
    myBulbs: state.bulb.myBulbs
  }
}

export default connect(mapStateToProps, actions)(BulbList)
