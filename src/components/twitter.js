import React from "react"

const Twitter = () => {

  const style = {
    margin: '50px auto 0px',
    textAlign: 'center',
    clear: 'both'
  }

  return(
    <div style={style}>
      <a href='http://192.168.1.108:8081/auth/twitter' target="_self"><i class="fa fa-twitter" aria-hidden="true"></i> Signin With Twitter</a>
    </div>
  )
}

export default Twitter
