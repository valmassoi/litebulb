import React from 'react'

const BulbItem = ({ bulb }) => {
  let { title, descr, img } = bulb

  return (
     <li class="list-group-item" style={{float:'left', position: 'relative', width: '200px', height:'300px'}}>
       <img src={img} style={{maxHeight: '250px', width:'190px', position: 'absolute', marginLeft: 'auto', marginRight: 'auto', top:'5px', left: '0', right: '0' }} />
       <div style={{position: 'absolute', bottom:'5px', left:'5px', paddingLeft:'5px', width:'190px', background:'rgba(255,255,255,0.7)'}}>
         <h3>{title}</h3>
       </div>
     </li>
   )
 }

 export default BulbItem
