import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'


class MenuButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: this.props.auth
    }
  }
  render() {
    console.log(this.state.auth)
    const {logout} = this.props
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
        <a onClick={() => logout()} key="logout">Logout</a>
      </div>
    </div>
  </div>
  )
  }
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
