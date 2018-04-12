import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'


function MenuButtons (props) {
  return (
  <div className="container">
    <div className= "menuButtons">
      <div className="menuButton">
        <Link to='meeting' className>Start Meeting</Link>
      </div>
      <div className="menuButton">
        <Link to='history' className>Meeting History</Link>
      </div>
      <div className="menuButton">
        <a className="navbar-item" onClick={() => logout()} key="logout">Logout</a>
      </div>
    </div>
  </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuButtons)
