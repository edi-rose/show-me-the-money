import React from 'react'
import {connect} from 'react-redux'
import {endMeeting, resetMeeting} from '../actions/currentMeeting'
import Stopwatch from 'react-stopwatch';


function Meeting (props) {
  var timerStyle = {
    margin: '50px',
    paddingTop: '100px',
    padding: '200px'
}
console.log(props.wages)
  return ( 
  <div className="container" style={timerStyle}>
    <Stopwatch seconds={0} minutes={0} hours={0} limit={"99:00:00"} withLoop={false} onCallback={() => console.log('Finish')}/>
    <h2>{props.wages}</h2>
    <div className="MeetingButtons">
      <button className="button" onClick = {props.dispatch(resetMeeting())}>End Meeting</button>
      <button className="button" onClick = {props.handleEndMeetingButton} >Reset Meeting</button>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    wages:state.currentMeeting.wages
  }
}

export default connect(mapStateToProps)(Meeting)
