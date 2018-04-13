import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import History from './History'
import StartMeeting from './StartMeeting'
import PastMeeting from './PastMeeting'
import HomeScreen from './HomeScreen'


const App = ({auth}) => (
  <Router>
    <div className="container has-text-centered">
      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">$how Me The Money</h1>
          </Link>
        </div>
      </div>

      <div className=''>
        <HomeScreen/>
        <Route path="/HomeScreen" component={HomeScreen}/>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/meeting" component={StartMeeting} />
        <Route path="/history" component={History} />
        <Route path="/history/:id" component={PastMeeting}/>
      </div>

    </div>
  </Router>
)

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
