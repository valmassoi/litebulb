import React, { Component } from 'react'

class BulbItem  extends Component {

  constructor() {
    super()
    this.state = {
      image: ''
    }
  }

  componentDidMount() {
    this.setState({image:this.props.bulb.img})
  }

  imgError(image) {
    console.log("err", image);
    image.onerror = ''
    image.src = 'http://i.huffpost.com/gen/1513771/thumbs/o-LIGHTBULB-facebook.jpg'
    this.setState({image:image.src})
    return true
  }

  render() {
    const { bulb, mode, deleteBulb, likeBulb } = this.props
    const { title, descr, img } = bulb

    bulb.like = true//HACK
    const cardStyle = {
      margin:'5px',
      background:'rgba(255,255,255,0.6)'
    }
    const imgStyle = {
      maxHeight: '500px',
      width:'190px',
    }
    const infoStyle = {
      padding:'0px 10px',
      width:'190px'
    }
    const delStyle = {
      textAlign: 'center',
      margin: '0 auto',
      width:'75px',
      cursor:'pointer'
    }
    const likeStyle = {
      border: 'none',
      backgroundColor:'Transparent',
      color:'#222',
      fontSize:'20px',
      cursor:'pointer'
    }

    let deleteBtn = null
    if(mode=="user") {
      deleteBtn =(
        <p
          class="text-danger"
          style={delStyle}
          onClick={() => deleteBulb(bulb)}
        >
          Delete
        </p>
      )
    }

    let likeBtn = null
    let empty = ''
    if(mode=="all") {
      if(bulb.like)//TODO reverse
        empty = '-empty'
      likeBtn =(
        <p class="pull-right" onClick={() => likeBulb(bulb)}><span class={`glyphicon glyphicon-heart${empty}`} aria-label="true" style={likeStyle} /></p>

      )
    }
  return (

    <div class="image-element-class" style={cardStyle}>
      <img src={this.state.image} style={imgStyle} onError={(image)=>this.imgError(image)} />
      <div style={infoStyle}>
        <h3 style={{marginTop:'0px'}}>{title}</h3>
        {likeBtn}
        {deleteBtn}
      </div>
    </div>
  )
}
}

 export default BulbItem
