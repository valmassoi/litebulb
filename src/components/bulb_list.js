import React, { Component } from 'react'
import { connect } from 'react-redux'
import BulbItem from './bulb_item'
import Masonry from 'react-masonry-component'

class BulbList extends Component {

  render() {

    let bulbs = [{ title:"one", descr:"some descr", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }, { title:"two", descr:"some descr", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }
    , { title:"three", descr:"some descr", img:"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg" }
    , { title:"4", descr:"some descr", img:"http://www.livescience.com/images/i/000/068/093/original/tesla-coil-fermilab.jpeg?interpolation=lanczos-none&downsize=" }
    , { title:"5", descr:"some descr", img:"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg" }] // HACK

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
              <BulbItem bulb={bulb} key={bulb.title+i} />
            )
          })
        }
      </Masonry>
    )
  }
}




function mapStateToProps(state) {
  return {
    null
  }
}

export default connect(mapStateToProps, null)(BulbList)
