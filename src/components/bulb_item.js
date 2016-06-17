import React from 'react'

const BulbItem = ({ bulb }) => {
  let { title, descr, img } = bulb

  let cardStyle = {
    margin:'5px',
  }
  let imgStyle = {
    maxHeight: '500px',
    width:'190px',
  }
  let infoStyle = {
    paddingLeft:'10px',
    width:'190px',
    background:'rgba(255,255,255,0.7)'
  }
  return (
    <div class="image-element-class" style={cardStyle}>
       <img src={img} style={imgStyle} />
       <div style={infoStyle}>
         <h3 style={{marginTop:'0px'}}>{title}</h3>
       </div>
     </div>
   )
 }

 export default BulbItem
