import React from 'react'
import {connect} from 'react-redux'
import Link from 'react-router-dom'

function MenuButtons (props) {

  return (<div className="container">
    <div className= "menuButtons">
      <div className="menuButton">
        <Link to='meeting' className>Start Meeting</Link>
      </div>
      <div className="menuButton">
        <Link to='history' className>Meeting History</Link>
      </div>
    </div>
  )  
}


export default connect()(MenuButtonss)