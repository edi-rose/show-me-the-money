
import React from 'react'
import { connect } from 'react-redux'
import Meeting from './Meeting'
import { launchMeeting, secondTick } from '../actions/currentMeeting'
import { getAttendees } from '../actions/attendees'
import CreateMeeting from './CreateMeeting'
import StartButton from './StartButton'

class StartMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMeeting: false,
      perSecWages: 22,
      showCreateMeeting: true, 
      showStartButton: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.setPerSecWages = this.setPerSecWages.bind(this)
    this.setCostPerSec = this.setCostPerSec.bind(this)
    this.handleEndMeetingButton = this.handleEndMeetingButton.bind(this)
  }

  handleClick() {
    this.props.dispatch(getAttendees())
    this.setPerSecWages() 
    this.setState({ showMeeting: true, 
                    perSecWages: this.state.perSecWages,
                    showCreateMeeting: false, 
                    showStartButton: false,
                    showMeeting: true })
    this.props.dispatch(launchMeeting(this.props.attendees, this.props.title, this.state.perSecWages))
    this.setTimer()
  }

  setTimer() {
    setInterval(() => this.countTime(), 1000);
  }

  getWages(arr) { 
    let wages = arr.map(cell => cell.wage)  
    return wages
  }

  setPerSecWages() {
    let wages = this.getWages(this.props.attendees)
    var combinedWages = wages.reduce((a, b) => a + b)
    var perSecondWages = (combinedWages / 60) / 60 
    this.setCostPerSec(perSecondWages) 
  }

  setCostPerSec(num) {
    console.log(num)
    this.setState({ showMeeting: this.state.showMeeting,
                    perSecWages: num })
    console.log(this.state.perSecWages)             
  }

  countTime() {
    this.props.dispatch(secondTick())
  }

  handleEndMeetingButton() {
    this.props.dispatch(resetMeeting())
    this.setState({showMeeting: false, perSecWages: this.state.perSecWages, showCreateMeeting: false, showStartButton: false})
}

  componentDidMount() {
     
    
  }

  render() {
    console.log('per sec wages', this.state.perSecWages)
    return (
      <div className="container">  
        {this.state.showCreateMeeting && <CreateMeeting />}
        {this.state.showStartButton && <StartButton handleClick = {this.handleClick} />}
        {this.state.showMeeting && <Meeting />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    attendees: state.attendees.attendees,
    title: state.attendees.title
  }
}

export default connect(mapStateToProps)(StartMeeting)
