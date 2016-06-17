import React, { Component } from 'react'
import { connect } from 'react-redux'
import checkImgUrl from '../utilities/checkImgUrl'
import * as bulbActions from '../actions/bulb'

//Bulb final Model: { title, img, owner, likes }

const badImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/2000px-ProhibitionSign2.svg.png"

class NewBulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "http://3.bp.blogspot.com/-j6omUq-pnHQ/UWQWwJ-hnmI/AAAAAAAAJAA/RkGoDfhobks/s1600/It's+Temporary.png"
    }
  }

  submitForm(e) {
    e.preventDefault()
    let { title, img } = this.state
    if(checkImgUrl(img) && img!=badImg) {
      console.log("allow save", title, img)
      this.props.addBulb({ title, img })
    }
    else
      console.log("warn user")
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleImgChange(e) {
    let img = e.target.value
    if (!checkImgUrl(img))
      img = badImg
    this.setState({ img })
  }

  render() {
    let { img } = this.state

    let imgContainer = {
      float: 'left !important',
      position: 'relative',
      backgroundColor: 'black',
      width: '300px',
      height: '300px'
    }
    let imgStyle = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '300px',
      maxHeight: '300px'
    }
    let formStyle = {
      float: 'left !important',
    }
    let formBtns = {
      float: 'right !important',
      marginRight: '16px'
    }
    return (
      <div>
        <div style={imgContainer}>
          <img src={img} style={imgStyle} />
        </div>
        <div class="form-container container-fluid centered" style={formStyle}>
         <form class="form-horizontal" onSubmit={this.submitForm.bind(this)}>
           <fieldset>
             <legend>Create a new bulb</legend>
             <div class="form-group">
               <label class="col-lg-2 control-label"><b>Title</b></label>
               <div class="col-lg-10">
                 <input class="form-control" placeholder="My brite idea" type="text" onChange={this.handleTitleChange.bind(this)}/>
               </div>
             </div>
             <div class="form-group">
               <label class="col-lg-2 control-label"><b>Source (http link)</b></label>
               <div class="col-lg-10">
                 <input class="form-control" placeholder="https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg" type="text" onChange={this.handleImgChange.bind(this)}/>
               </div>
             </div>
             <div class="form-group">
               <div style={formBtns}>
                 <button type="reset" class="btn btn-default">Reset</button>
                 <button type="submit" style={{marginLeft: '10px'}} class="btn btn-primary">Create</button>
               </div>
             </div>
           </fieldset>
         </form>
       </div>
      </div>
    )
  }
}

export default connect(null, bulbActions)(NewBulb)