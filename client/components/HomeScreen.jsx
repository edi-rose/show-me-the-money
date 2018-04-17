import React from 'react'
import {connect} from 'react-redux'
import MenuButtons from './MenuButtons'
import Login from './Login'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: this.props.auth,
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState(this.turnPropsToState(nextProps))
  }
  turnPropsToState(props){
    console.log('propsToState triggered')
    return {
      auth: this.props.auth
    }
  }
  render() {
    return (
      <div>
        {!this.state.auth.isAuthenticated &&
          <Login/>
        }
        {this.state.auth.isAuthenticated &&
          <MenuButtons reset={this.reset} />
        }
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(HomeScreen)
