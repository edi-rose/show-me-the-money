import {combineReducers} from 'redux'

import auth from './auth'
import attendees from './attendees'
import currentMeeting from './currentMeeting'

export default combineReducers({
  auth,
  attendees,
  currentMeeting
})
