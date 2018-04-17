import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBurger: false,
      showButtons: true
    }
    this.toggleBurger = this.toggleBurger.bind(this)
  }
  toggleButtons() {
    this.setState({
      showButtons: false
    })
  }
  toggleBurger() {
    this.setState({showBurger: !this.state.showBurger})
  }
  render() {
    const {auth, logout} = this.props
    const {showBurger} = this.state
    console.log(this.state.showButtons)
    return (
          <div>
            { auth.isAuthenticated
              ?
              [
                <Link onClick={this.toggleBurger} className="navbar-item" to="/meeting" key="start">Start Meeting</Link>,
                <Link onClick={this.toggleBurger} className="navbar-item" to="/history" key="history">Meeting History</Link>,
                <a className="navbar-item" onClick={() => logout()}  key="logout">Logout</a>

              ]
              : [
                <Link onClick={this.toggleBurger} className="navbar-item is-large" to='/login' key="login">Login</Link>,
                <Link onClick={this.toggleBurger} className="navbar-item" to='/register' key="register">Register</Link>
              ]
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
