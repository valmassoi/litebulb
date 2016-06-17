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
      bulbs=[{ title:"one", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }, { title:"two", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }
    , { title:"three", img:"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg" }
    , { title:"4", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }
    , { title:"5", img:"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg" }] // HACK

    if (mode=="user")
      bulbs=[{ title:"user1", img:"http://surfburro.com/images/churrobig.png" }] // HACK

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
