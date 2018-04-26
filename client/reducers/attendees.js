let initialState = {
  title: '',
  attendees: []
}

function attendees(state = initialState, action) { 
    switch (action.type) {
        case 'ADD_TITLE':
            return {
              title: action.title, 
              attendees:[...state.attendees]
            }
        case 'ADD_ATTENDEE':
        console.log('add-attendee reducer', action.attendee)
            return {
              title: state.title,
              attendees: [...state, action.attendee]
            }  
        case 'REMOVE_ATTENDEE':
            let newAttendees = state.attendees.filter((attendee, i) => i !== action.index)
            return {
              title: state.title,
              attendees: [...newAttendees]
            }  
         case 'GET_ATTENDEES':
            console.log('getattendee reducer', state)
            return state
        default:
            return state
    }
}

export default attendees